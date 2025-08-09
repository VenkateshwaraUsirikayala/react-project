-- Create contact messages table for the Contact page submissions
create extension if not exists pgcrypto;

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  service_type text,
  preferred_time text,
  subject text,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

-- Indexes for querying
create index if not exists idx_contact_messages_created_at on public.contact_messages (created_at desc);
create index if not exists idx_contact_messages_status on public.contact_messages (status);

-- Enable RLS and add policies
alter table public.contact_messages enable row level security;

-- Allow anyone (including visitors) to submit a contact message (INSERT only)
create policy if not exists "Anyone can create contact messages"
  on public.contact_messages
  for insert
  to public
  with check (true);

-- Only authenticated users can read messages
create policy if not exists "Authenticated users can view contact messages"
  on public.contact_messages
  for select
  to authenticated
  using (true);


import React, { useState } from 'react';
import {Mail, Phone, MapPin, Clock, Send, MessageCircle, Instagram, Youtube, Facebook, Loader2} from 'lucide-react';
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog.tsx";
import {useToast} from "@/components/ui/use-toast.ts";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
        preferredTime: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
    const response = await fetch('https://api.bhavanjali.art/contact-submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Allow-Credentials' : 'true'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        serviceType: formData.serviceType,
        message: formData.message,
        preferredTime: formData.preferredTime,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit message');
    }

    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      message: '',
      preferredTime: ''
    });
            setShowSuccessDialog(true);

        } catch (error) {
            console.error('Error submitting form:', error);
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "There was a problem submitting your message. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@bhavanjali.art",
      description: "I respond within 24 hours",
      color: "from-coral-500 to-pink-500"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 91136 94811",
      description: "Call or WhatsApp anytime",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Bangalore",
      description: "Online classes",
      color: "from-gold-500 to-yellow-500"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Sun: 8AM-8PM",
      description: "Sunday by appointment",
      color: "from-green-500 to-emerald-500"
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      platform: "Instagram",
      handle: "@bharthanatyam_carnatic_music",
      color: "hover:text-pink-600",
    },
    // ,
    // {
    //   icon: Youtube,
    //   platform: "YouTube",
    //   handle: "Artistic Soul Channel",
    //   color: "hover:text-red-600",
    // }
    {
      icon: Facebook,
      platform: "Facebook",
      handle: "bharthanatyam_carnatic_music",
      color: "hover:text-blue-600",
    },
    {
      icon: MessageCircle,
      platform: "WhatsApp",
      handle: "+91 91136 94811",
      color: "hover:text-green-600",
    },
  ];

  const faqs = [
    {
      question: "Do you offer trial classes?",
      answer:
        "Yes! New students can book a complimentary 30-minute trial class to experience my teaching style and see if we're a good fit.",
    },
    {
      question: "What age groups do you teach?",
      answer:
        "I welcome students of all ages, from 4-year-old beginners to adult learners. My teaching approach is tailored to each age group's needs.",
    },
    {
      question: "Do I need any prior experience?",
      answer:
        "Absolutely not! I have students ranging from complete beginners to advanced performers. Everyone starts somewhere.",
    }
    // ,
    // {
    //   question: "What should I wear to dance classes?",
    //   answer:
    //     "Comfortable, stretchy clothing that allows free movement. For Bharatanatyam, traditional practice wear is preferred but not mandatory for beginners.",
    // },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-coral-50 via-purple-50 to-gold-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-coral-500 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Ready to start your artistic journey? I'd love to hear from you!
            Whether you have questions, want to book a class, or just want to
            chat about dance and music.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`inline-flex p-3 bg-gradient-to-r ${info.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-800 font-semibold mb-1">
                  {info.content}
                </p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section - Form & Info */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Send Me a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and I'll get back to you as soon as
                  possible. Don't forget to mention your preferred class type
                  and timing!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors duration-300"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="serviceType"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Interested Service *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="Bharatanatyam">Bharatanatyam</option>
                      <option value="carnatic-vocal">Carnatic Vocal</option>
                      <option value="performance-prepartion">Performance Preparation</option>
                      <option value="semi-classical">Semi Classical</option>
                      <option value="others">Other (please specify in message)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Time
                  </label>
                  <input
                    type="text"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors duration-300"
                    placeholder="e.g., Weekday evenings, Saturday mornings"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your goals, experience level, or any questions you have..."
                  ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-coral-500 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin"/>
                  ) : (
                      <Send className="h-5 w-5"/>
                  )}
                  <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>

            {/* Additional Info & Social */}
            <div className="space-y-8">

              {/* Quick Response Promise */}
              <div className="bg-gradient-to-r from-coral-500 to-purple-600 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  Quick Response Guarantee
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  I personally read and respond to every message within 24
                  hours. Your artistic journey is important to me!
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">&lt; 24hrs</div>
                    <div className="text-sm opacity-80">Response Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm opacity-80">Response Rate</div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Follow My Journey
                </h3>
                <p className="text-gray-600 mb-6">
                  Stay connected for daily inspiration, student highlights, and
                  behind-the-scenes moments.
                </p>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="h-6 w-6 text-gray-600" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {social.platform}
                        </div>
                        <div className="text-sm text-gray-600">
                          {social.handle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about my classes and teaching
              approach
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-coral-50 to-purple-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Have more questions?</p>
            <a
              href="#contact-form"
              className="inline-flex items-center space-x-2 text-coral-600 hover:text-coral-700 font-semibold transition-colors duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Ask me anything</span>
            </a>
          </div>
        </div>
      </section>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-green-600">
              Message Sent Successfully!
            </DialogTitle>
            <DialogDescription className="text-center space-y-3 pt-4">
              <div className="text-lg">Thank you for reaching out!</div>
              <div className="text-gray-600">
                I've received your message and will get back to you within 24 hours.
                Your artistic journey is important to me!
              </div>
              <div className="flex items-center justify-center space-x-2 pt-2">
                <Clock className="h-4 w-4 text-coral-500" />
                <span className="text-sm font-medium text-coral-600">Response time: &lt; 24 hours</span>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Map/Location Section (Placeholder) */}
      {/* <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visit My Studio
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Mumbai, easily accessible by public
              transport
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="aspect-video bg-gradient-to-br from-coral-100 to-purple-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-coral-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Studio Location
                </h3>
                <p className="text-gray-600">
                  Interactive map will be displayed here
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Mumbai, Maharashtra - Exact address shared upon booking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;

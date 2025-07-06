
import React from 'react';
import { Music, Dance, Mail, Phone, Instagram, Youtube, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                <Dance className="h-6 w-6 text-coral-400" />
                <Music className="h-6 w-6 text-gold-400" />
              </div>
              <span className="text-xl font-bold">Artistic Soul</span>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed">
              Transforming lives through the art of dance and music. Join me on this beautiful journey of self-expression and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-purple-200 hover:text-white transition-colors duration-300">About Me</a>
              <a href="/portfolio" className="block text-purple-200 hover:text-white transition-colors duration-300">Portfolio</a>
              <a href="/services" className="block text-purple-200 hover:text-white transition-colors duration-300">Services & Pricing</a>
              <a href="/contact" className="block text-purple-200 hover:text-white transition-colors duration-300">Book a Class</a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Connect With Me</h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Mail className="h-4 w-4 text-coral-400" />
                <span className="text-purple-200 text-sm">hello@artisticsoul.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Phone className="h-4 w-4 text-coral-400" />
                <span className="text-purple-200 text-sm">+91 98765 43210</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-8 pt-8 text-center">
          <p className="text-purple-300 text-sm">
            © 2024 Artistic Soul. All rights reserved. Made with ❤️ for the love of dance and music.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

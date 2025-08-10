
import React from 'react';
import {ArrowRight, Star, Users, Calendar, Award, ShieldCheck, Handshake} from 'lucide-react';
import { Link } from 'react-router-dom';
import {Analytics} from "@vercel/analytics/next";

const Home = () => {
  const services = [
    {
      title: "Dance Classes",
      description: "Bharatanatyam, Contemporary, and Bollywood dance forms",
      icon: "💃",
      color: "from-coral-500 to-pink-500"
    },
    {
      title: "Vocal Training", 
      description: "Classical, Western, and contemporary vocal coaching",
      icon: "🎤",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Performance Prep",
      description: "Stage presence, confidence building, and audition prep",
      icon: "🎭",
      color: "from-gold-500 to-yellow-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Students Trained", icon: Users },
    { number: "8+", label: "Years Experience", icon: Award },
    {number: '200+', label: 'Certified Students', icon: ShieldCheck},
    {number: '3+', label: 'Partnered with top universities', icon: Handshake},
    { number: "50+", label: "Performances", icon: Star },
    { number: "24/7", label: "Support Available", icon: Calendar }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-coral-100 via-purple-50 to-gold-100"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-coral-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gold-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fade-in">
            <img 
              src="Home Icon1.png"
              alt="Dance and Singing Coach"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-2xl ring-4 ring-white/50 hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 animate-fade-in delay-300">
            <span className="bg-gradient-to-r from-coral-500 via-purple-600 to-gold-500 bg-clip-text text-transparent">
              Dance. Sing. Shine.
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
            Welcome to my world of artistic expression. I'm here to help you discover your inner performer through 
            <span className="text-coral-600 font-semibold"> professional dance </span> and 
            <span className="text-purple-600 font-semibold"> vocal coaching</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700">
            <Link 
              to="/contact"
              className="group bg-gradient-to-r from-coral-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Book Your First Demo</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              to="/portfolio"
              className="group bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-coral-500 hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive training programs designed to nurture your artistic talents and build confidence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl p-8 bg-white border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className={`mt-6 w-12 h-1 bg-gradient-to-r ${service.color} rounded-full group-hover:w-20 transition-all duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My Journey in Numbers</h2>
            <p className="text-xl text-purple-200">
              Years of dedication reflected in the lives I've touched
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                    <stat.icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-gold-400 mb-2">{stat.number}</div>
                <div className="text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-coral-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Begin Your Artistic Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Whether you're a complete beginner or looking to refine your skills, I'm here to guide you every step of the way. 
            Let's unlock your potential together.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-coral-500 to-purple-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Start Your Journey Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

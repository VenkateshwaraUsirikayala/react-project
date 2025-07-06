
import React from 'react';
import { Check, Star, Clock, Users, Award, Calendar } from 'lucide-react';

const Services = () => {
  const pricingPlans = [
    {
      title: "One-on-One Vocal Coaching",
      price: "₹1,000",
      period: "per hour",
      description: "Personalized vocal training tailored to your specific needs and goals",
      features: [
        "Individual attention and customized lesson plans",
        "Breathing techniques and vocal exercises",
        "Performance coaching and stage presence",
        "Genre-specific training (Classical, Western, Pop)",
        "Recording session guidance",
        "Flexible scheduling"
      ],
      popular: false,
      color: "from-purple-500 to-indigo-600",
      icon: "🎤"
    },
    {
      title: "Weekly Group Dance",
      price: "₹800",
      period: "per class",
      description: "Fun and energetic group dance classes in various styles",
      features: [
        "Small group setting (max 8 students)",
        "Bharatanatyam, Contemporary, Bollywood",
        "Progressive skill building",
        "Performance opportunities",
        "Costume and makeup guidance",
        "Monthly showcase events"
      ],
      popular: true,
      color: "from-coral-500 to-pink-600",
      icon: "💃"
    },
    {
      title: "10-Class Combo Pass",
      price: "₹7,500",
      period: "total package",
      description: "Mix and match dance and vocal classes with significant savings",
      features: [
        "Combine any dance and vocal classes",
        "Valid for 3 months from purchase",
        "Priority booking for popular time slots",
        "Free trial class for friends/family",
        "Complimentary performance workshop",
        "Digital progress tracking"
      ],
      popular: false,
      color: "from-gold-500 to-yellow-600",
      icon: "🎭"
    }
  ];

  const additionalServices = [
    {
      title: "Performance Preparation",
      description: "Intensive coaching for auditions, competitions, and special events",
      price: "₹1,500/session",
      icon: Star
    },
    {
      title: "Wedding Choreography",
      description: "Custom choreography for your special day with family participation",
      price: "Starting ₹5,000",
      icon: Award
    },
    {
      title: "Online Classes",
      description: "Live virtual classes for students who prefer learning from home",
      price: "₹600/hour",
      icon: Users
    },
    {
      title: "Group Workshops",
      description: "Specialized workshops for schools, corporate events, and parties",
      price: "Contact for pricing",
      icon: Calendar
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-coral-50 via-purple-50 to-gold-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Services & <span className="bg-gradient-to-r from-coral-500 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Professional dance and vocal coaching designed to nurture your artistic talents. 
            Choose the perfect plan that fits your goals and schedule.
          </p>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-600">
              Flexible options to suit every learner's needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2 ${
                  plan.popular ? 'ring-2 ring-coral-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-coral-500 to-pink-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                  <div className="text-center mb-8">
                    <div className="text-4xl mb-4">{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-coral-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full bg-gradient-to-r ${plan.color} text-white py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">
              Specialized offerings for unique occasions and requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-coral-500 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-coral-600">{service.price}</span>
                      <button className="text-sm text-purple-600 hover:text-purple-800 font-medium transition-colors duration-300">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Secure Payment Options</h2>
          <p className="text-xl text-gray-600 mb-12">
            Multiple payment methods for your convenience and security
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="group">
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-6 rounded-2xl group-hover:shadow-lg transition-shadow duration-300">
                <div className="text-2xl mb-2">💳</div>
                <h3 className="font-semibold text-gray-900">Credit/Debit Cards</h3>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-coral-100 to-pink-100 p-6 rounded-2xl group-hover:shadow-lg transition-shadow duration-300">
                <div className="text-2xl mb-2">📱</div>
                <h3 className="font-semibold text-gray-900">UPI Payments</h3>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-gold-100 to-yellow-100 p-6 rounded-2xl group-hover:shadow-lg transition-shadow duration-300">
                <div className="text-2xl mb-2">🏦</div>
                <h3 className="font-semibold text-gray-900">Bank Transfer</h3>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-2xl group-hover:shadow-lg transition-shadow duration-300">
                <div className="text-2xl mb-2">💸</div>
                <h3 className="font-semibold text-gray-900">Cash Payment</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-coral-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🎁 Special Offers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-coral-600 mb-2">New Student Discount</h4>
                <p className="text-gray-700">20% off your first month when you book 4 or more classes</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-600 mb-2">Refer a Friend</h4>
                <p className="text-gray-700">Get 1 free class for every successful referral</p>
              </div>
              <div>
                <h4 className="font-semibold text-gold-600 mb-2">Family Package</h4>
                <p className="text-gray-700">15% discount when 2+ family members enroll together</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Early Bird Special</h4>
                <p className="text-gray-700">Book morning slots (8-10 AM) and save 10%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-coral-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your first class today and discover the artist within you. Free consultation available for new students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-coral-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Free Consultation
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-coral-600 transition-all duration-300"
            >
              Ask Questions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

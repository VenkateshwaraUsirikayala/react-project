
import React from 'react';
import { Star, Quote, Users, Award, Heart, TrendingUp } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent of 8-year-old student",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face",
      content: "My daughter has blossomed under her guidance. Not only has she learned beautiful Bharatanatyam techniques, but her confidence has grown tremendously. The individual attention and patient teaching style makes all the difference.",
      rating: 5,
      category: "parent"
    },
    {
      name: "Rahul Mehta",
      role: "Adult Vocal Student",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=100&h=100&fit=crop&crop=face",
      content: "I started vocal lessons at 32 with no prior experience. Her teaching method is so encouraging and tailored to my pace. I can now confidently sing at family gatherings and even performed at my friend's wedding!",
      rating: 5,
      category: "adult"
    },
    {
      name: "Dr. Kavita Patel",
      role: "Collaborating Artist",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face",
      content: "Working with her on our cultural festival was incredible. Her choreography was innovative, and her ability to train a large group of performers in such a short time was impressive. A true professional!",
      rating: 5,
      category: "professional"
    },
    {
      name: "Aarti Singh",
      role: "Teen Dance Student",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=100&h=100&fit=crop&crop=face",
      content: "She makes learning dance so fun! I love how she combines traditional Bharatanatyam with modern styles. Her classes are the highlight of my week, and I've made so many friends here too.",
      rating: 5,
      category: "teen"
    },
    {
      name: "Mumbai Cultural Society",
      role: "Event Organizer",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=100&h=100&fit=crop&crop=face",
      content: "We've hired her for multiple events, and each performance has been outstanding. Her students are well-prepared, disciplined, and truly showcase the beauty of Indian classical arts. Highly recommended!",
      rating: 5,
      category: "organization"
    },
    {
      name: "Vikash Kumar",
      role: "Working Professional",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=100&h=100&fit=crop&crop=face",
      content: "Taking vocal lessons after work has been therapeutic. Her flexible scheduling and understanding nature made it possible for me to pursue my passion despite a busy corporate job. My stress levels have significantly reduced!",
      rating: 5,
      category: "adult"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Students", icon: Users, color: "from-coral-500 to-pink-500" },
    { number: "98%", label: "Student Satisfaction", icon: Heart, color: "from-purple-500 to-indigo-500" },
    { number: "8+", label: "Years Teaching", icon: Award, color: "from-gold-500 to-yellow-500" },
    { number: "95%", label: "Skill Improvement", icon: TrendingUp, color: "from-green-500 to-emerald-500" }
  ];

  const achievements = [
    "Best Dance Instructor Award 2023 - Mumbai Cultural Center",
    "Featured in 'Teaching Excellence' magazine",
    "Invited as guest judge for state-level competitions",
    "500+ successful student performances",
    "Recognized by Indian Classical Dance Association"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-coral-50 via-purple-50 to-gold-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Student <span className="bg-gradient-to-r from-coral-500 to-purple-600 bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The joy and transformation of my students is what drives my passion for teaching. 
            Here are some heartwarming testimonials from the amazing people I've had the privilege to work with.
          </p>
          <div className="flex justify-center items-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-gold-400 fill-current" />
            ))}
            <span className="ml-3 text-lg font-semibold text-gray-700">4.8 Average Rating</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 flex justify-center">
                  <div className={`p-4 bg-gradient-to-r ${stat.color} rounded-full group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
            <p className="text-xl text-gray-600">
              Real experiences from real students and their families
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-coral-100 to-purple-100 rounded-bl-2xl flex items-center justify-center">
                  <Quote className="h-6 w-6 text-coral-500" />
                </div>
                
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-gray-100"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed text-sm">
                  "{testimonial.content}"
                </p>
                
                <div className="mt-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    testimonial.category === 'parent' ? 'bg-coral-100 text-coral-700' :
                    testimonial.category === 'adult' ? 'bg-purple-100 text-purple-700' :
                    testimonial.category === 'teen' ? 'bg-gold-100 text-gold-700' :
                    testimonial.category === 'professional' ? 'bg-green-100 text-green-700' :
                    'bg-indigo-100 text-indigo-700'
                  }`}>
                    {testimonial.category === 'parent' ? 'Parent Review' :
                     testimonial.category === 'adult' ? 'Adult Student' :
                     testimonial.category === 'teen' ? 'Teen Student' :
                     testimonial.category === 'professional' ? 'Professional' :
                     'Organization'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recognition & Achievements</h2>
            <p className="text-xl text-gray-600">
              Awards and recognition that validate my commitment to excellence
            </p>
          </div>
          
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 p-6 bg-gradient-to-r from-coral-50 to-purple-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-coral-500" />
                </div>
                <p className="text-gray-800 font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Preview */}
      <section className="py-20 bg-gradient-to-r from-coral-500 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Video Testimonials</h2>
            <p className="text-xl opacity-90">
              Hear directly from my students about their journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <div 
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-colors duration-300 cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-l-8 border-r-0 border-t-6 border-b-6 border-l-white border-t-transparent border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Student Success Story {video}</h3>
                  <p className="text-white/80 text-sm">Watch how dance transformed their life</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gold-50 to-yellow-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Be the Next Success Story</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Join hundreds of students who have discovered their artistic potential. 
            Your transformation story could be featured here next!
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-coral-500 to-purple-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Start Your Journey Today</span>
            <Heart className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

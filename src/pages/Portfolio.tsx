
import React, { useState } from 'react';
import { Play, ExternalLink, Filter, X } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'dance', label: 'Dance Performances' },
    { id: 'singing', label: 'Singing Gigs' },
    { id: 'students', label: 'Student Showcase' },
    { id: 'behind', label: 'Behind the Scenes' }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'dance',
      type: 'video',
      title: 'Bharatanatyam Recital 2023',
      description: 'Traditional Bharatanatyam performance at the Cultural Arts Festival',
      thumbnail: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      category: 'singing',
      type: 'video',
      title: 'Jazz Performance at Blue Note',
      description: 'Live jazz performance featuring contemporary vocals',
      thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 3,
      category: 'students',
      type: 'image',
      title: 'Annual Student Recital',
      description: 'Proud moment with my students after their first public performance',
      thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      category: 'dance',
      type: 'video',
      title: 'Contemporary Fusion',
      description: 'Modern dance piece blending Eastern and Western styles',
      thumbnail: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 5,
      category: 'behind',
      type: 'image',
      title: 'Studio Sessions',
      description: 'Behind the scenes moments during intensive training sessions',
      thumbnail: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      category: 'singing',
      type: 'video',
      title: 'Classical Vocal Recital',
      description: 'Traditional Indian classical vocals with live accompaniment',
      thumbnail: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const openModal = (item) => {
    setSelectedMedia(item);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-coral-50 via-purple-50 to-gold-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-coral-500 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            A collection of performances, student achievements, and behind-the-scenes moments that capture 
            the essence of my artistic journey and teaching philosophy.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-coral-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-coral-500 transition-colors duration-300">
                        <Play className="h-8 w-8 text-white fill-current" />
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 capitalize">
                      {item.category === 'students' ? 'Student Work' : item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-coral-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-colors duration-300"
            >
              <X className="h-6 w-6" />
            </button>
            
            {selectedMedia.type === 'video' ? (
              <div className="aspect-video">
                <iframe
                  src={selectedMedia.videoUrl}
                  title={selectedMedia.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <img 
                src={selectedMedia.thumbnail} 
                alt={selectedMedia.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            )}
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedMedia.title}</h3>
              <p className="text-gray-600 leading-relaxed">{selectedMedia.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-coral-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Own Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join me in discovering your artistic potential. Let's create beautiful memories together through dance and music.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white text-coral-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Start Your Journey</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

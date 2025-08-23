
import React from 'react';
import { Award, Music, Users, Heart, Star, Calendar } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      year: "2020",
      title: "Started Teaching Journey",
      description: "Began my career as a dance and vocal instructor",
      icon: Calendar
    },
    {
      year: "2021",
      title: "Showcasing Bharatanatyam Culture Globally",
      description: "Experienced in teaching students globally, delivering quality education across diverse cultures and backgrounds.",
      icon: Calendar
    },
    {
      year: "2022",
      title: "Empowering Students Through Certifications",
      description: "Students successfully attended and completed their certification programs, strengthening their academic and professional journey.",
      icon: Star
    },
    {
      year: "2023",
      title: "Trained & Accredited Bharatanatyam Mentor",
      description: "Successfully completed Advanced Bharatanatyam Certification from Bridge Academy, Chennai, specializing in adavus, abhinaya, and choreography.",
      icon: Award
    },
    {
      year: "2024",
      title: "Advanced Certified Bharatanatyam Teacher",
      description: "Trained and certified in Advanced Bharatanatyam at Gangubai Hangal University,Mysore., upholding the cultural heritage and spiritual depth of this classical art form",
      icon: Award
    },
    {
      year: "2025",
      title: "International Conference on Indian Fine Arts",
      description: "Nattuvangam workshop under the guidance of Dr. A. Sumathi Sundar. \n Master class under the guidance of Dr. Swarnamalya and Jayashree Narayanan",
      icon: Users
    },
    {
      year: "2025",
      title: "500+ Students",
      description: "Reached milestone of training over 500 students",
      icon: Users
    }
  ];

  const skills = [
    { name: "Bharatanatyam", level: 95 },
    // { name: "Western Vocals", level: 90 },
    { name: "Classical Vocals", level: 88 },
    { name: "Stage Performance", level: 96 }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-coral-50 via-purple-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                My{" "}
                <span className="bg-gradient-to-r from-coral-500 to-purple-600 bg-clip-text text-transparent">
                  Artistic Story
                </span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                From a young dreamer to a passionate educator, my journey in
                dance and music has been nothing short of magical. Every step,
                every note, and every student has shaped who I am today.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 8 years of experience in performing arts, I've
                dedicated my life to sharing the transformative power of dance
                and music with students from all walks of life.
              </p>
            </div>
            <div className="animate-fade-in delay-300">
              <img
                src="My Story.jpeg"
                alt="About the instructor"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              My Journey
            </h2>
            <p className="text-xl text-gray-600">
              A lifelong passion for the performing arts
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-8">
              My love affair with dance and music began at the tender age of 12.
              What started as childhood curiosity blossomed into a deep,
              unwavering passion that would define my entire life's purpose.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-coral-50 to-pink-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-coral-600 mb-4 flex items-center">
                  <Heart className="h-6 w-6 mr-2" />
                  Dance Journey
                </h3>
                <p>
                  I began my formal training in Bharatanatyam disciplined of renowned Guru Smt. Chitra Aravind, Smt. Aparna Vasudevan and Smt. Ramya. The discipline, grace, and storytelling aspect of this classical dance form became the foundation of my artistic expression.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-purple-600 mb-4 flex items-center">
                  <Music className="h-6 w-6 mr-2" />
                  Vocal Training
                </h3>
                <p>
                  My vocal journey encompasses Indian classical traditions.  I am trained in carnatic vocal under Guru Smt. Mangala and Smt. Sudha , I developed a versatile voice capable of expressing diverse emotions and styles.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gold-50 to-yellow-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-gold-600 mb-4">
                Teaching Philosophy
              </h3>
              <p className="text-lg">
                I believe that every individual carries a unique rhythm and expression that can be discovered through Bharatanatyam. My approach goes beyond teaching adavus and choreography—it is about nurturing discipline, grace, creativity, and inner confidence.
              </p>
              <p className="text-lg mt-4">
                I strive to create a supportive and respectful environment where students can explore the spiritual and artistic depth of this classical dance form without fear of judgment.
              </p>
              <p className="text-lg mt-4">
                Whether you are a child taking your first steps in dance or an adult deepening your practice, my mission is to help you experience the joy of movement, connect with the rich cultural heritage of Bharatanatyam, and build skills that will last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Milestones
            </h2>
            <p className="text-xl text-gray-600">
              Moments that shaped my artistic journey
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-coral-500 to-purple-600"></div>

            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } mb-12`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-gradient-to-r from-coral-500 to-purple-600 rounded-full">
                        <achievement.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-coral-600">
                        {achievement.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line">{achievement.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-coral-500 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/*<section className="py-20 bg-white">*/}
      {/*  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">*/}
      {/*    <div className="text-center mb-16">*/}
      {/*      <h2 className="text-4xl font-bold text-gray-900 mb-4">*/}
      {/*        My Expertise*/}
      {/*      </h2>*/}
      {/*      <p className="text-xl text-gray-600">*/}
      {/*        Years of training and performance experience*/}
      {/*      </p>*/}
      {/*    </div>*/}

      {/*    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">*/}
      {/*      {skills.map((skill, index) => (*/}
      {/*        <div key={index} className="mb-6">*/}
      {/*          <div className="flex justify-between items-center mb-2">*/}
      {/*            <span className="text-lg font-semibold text-gray-900">*/}
      {/*              {skill.name}*/}
      {/*            </span>*/}
      {/*            <span className="text-sm font-medium text-gray-600">*/}
      {/*              {skill.level}%*/}
      {/*            </span>*/}
      {/*          </div>*/}
      {/*          <div className="w-full bg-gray-200 rounded-full h-3">*/}
      {/*            <div*/}
      {/*              className="bg-gradient-to-r from-coral-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"*/}
      {/*              style={{ width: `${skill.level}%` }}*/}
      {/*            ></div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </div>
  );
};

export default About;

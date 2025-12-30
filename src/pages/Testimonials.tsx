
import React, {useState} from 'react';
import {Star, Quote, Users, Award, Heart, TrendingUp, Play} from 'lucide-react';
import Avatar from "react-avatar";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";

const Testimonials = () => {
    const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
    const testimonials = [
        {
            name: "Seerat Barot",
            role: "Parent of 7-year-old student",
            // role: "",
            content: "I am thankful to Harshita madam for the bharatnatyam  online class. She pays attention to all kids online. Batches are small. She is very regular in her classes, compensates for the classes missed by the child.",
            rating: 5,
            category: "parent",
            state: "Maharashtra",
            country: "India"
        },
        {
            name: "Kajal Patil",
            role: "Adult Bharatanatyam Student",
            // role: "",
            content: "I love attending Bharatnatyam classes offered by Ms. Harshitha. She is highly flexible and very thorough with her teachings. I joined her classes at the age of 37 and for the last 3 years I have acquired strength, flexibility and overall increased stamina. I am honored to be a student of Ms. Harshitha and thankful for her passion & dedication towards the students.",
            rating: 4,
            category: "adult",
            state: "California",
            country: "USA"
        },
        {
            name: "Snehal Patil",
            role: "Adult Bharatanatyam Student",
            // role: "",
            content: "I have enjoyed learning Bharatnatyam Adavus and Taalam as well as a song within first few months. I like how Harshitha Ma'am wants us to perfect each step with eyes, neck and hip movements. It's great that Harshitha Ma'am makes up for the missed classes.",
            rating: 4,
            category: "adult",
            state: "Ohio",
            country: "USA"
        },
        {
            name: "Aadvita Singh",
            role: "Parent of 5-year-old student",
            // role: "",
            content: "Harshita is a very good soft spoken patiently teaching dance and music teacher..she teaches with so much love and affection that small kids also learn very fast .It is her hard-work that my 5year old daughter has passed her pre-grade and now she is in grade 1..she is a blessing for all those working mothers who don't have the time to take their child for offline classes",
            rating: 5,
            category: "professional",
            state: "Uttar Pradesh",
            country: "India"
        },
        {
            name: "Mishika Mishra",
            role: "Parent of 5-year-old student",
            // role: "",
            content: "Thank you for your patience, dedication, and the way you make each session engaging and meaningful. Mishika is really enjoying the classes and looks forward to them every week. We truly appreciate the way you focus on both technique and expression, it’s helping her grow not just as a dancer, but also in confidence.",
            rating: 5,
            category: "teen",
            state: "Bangalore",
            country: "India"
        },
        {
            name: "Swapna Vemula",
            role: "Adult Bharatanatyam Student",
            // role: "",
            content: "Well structured and organised  classes and the practice is almost completed during classes itself. After multiple trials of other offline and online fine arts classes we landed with Harshitha teacher and then no looking back. Though I was sceptical about online classes, Harshitha bested with her teaching style and made us learning the expert.",
            rating: 5,
            category: "organization",
            state: "Bangalore",
            country: "India"
        },
        {
            name: "Ch.Varnica",
            role: "Parent of 8-year-old student",
            // role: "",
            content: "My daughter have been learning from Harshitha mam since one and half years and I'm constantly impressed by her dedication .She creates a fun and supportive atmosphere.",
            rating: 5,
            category: "adult",
            state: "Dammam",
            country: "Saudi Arabia"
        },
        {
            name: "Shanaya Singh",
            role: "Parent of 9-year-old student",
            // role: "",
            content: "Thank you so much for teaching us with so much love and patience. I really enjoy every class and love learning Bharatanatyam from you. Your way of explaining each step and expression makes it easy to understand and so much fun",
            rating: 5,
            category: "adult",
            state: '',
            country: 'Singapore'
        },
        {
            name: "Ojaswi Visaa",
            role: "Parent of 6-year-old student",
            // role: "",
            content: "Perfect for anyone who wants their kids to learn classical dance or music.",
            rating: 5,
            category: "adult",
            state: 'Metromanila',
            country: 'Phillipines'
        },
        {
            name: "Anwita Minocha",
            role: "Parent of 7-year-old student",
            // role: "",
            content: "The best part about any learning process is the teacher who is there with you taking pains, making sure their disciple are intune.\n" +
                "Ms. Harshitha ensures that each student not only learns the steps but understands the cultural and spiritual essence of the dance. Her passion is truly infectious, and it inspires everyone in the class to give their best. \n" +
                "I couldn't have asked for a better GURU",
            rating: 5,
            category: "parent",
            state: "New Delhi",
            country: "India",
        }
    ];

  const stats = [
    { number: "500+", label: "Happy Students", icon: Users, color: "from-coral-500 to-pink-500" },
    { number: "98%", label: "Student Satisfaction", icon: Heart, color: "from-purple-500 to-indigo-500" },
    { number: "6+", label: "Years Teaching", icon: Award, color: "from-gold-500 to-yellow-500" },
    { number: "95%", label: "Skill Improvement", icon: TrendingUp, color: "from-green-500 to-emerald-500" }
  ];


    const handleVideoPlay = (videoId: string) => {
        setCurrentlyPlaying(videoId);
    };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-coral-50 via-purple-50 to-gold-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-coral-500 to-purple-600 bg-clip-text text-transparent">Student Stories</span>
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
                    {[
                        { url: "https://pub-0a0616f707eb40dfa8d6bc5829bad8d1.r2.dev/Reviews/Videos/Sahana-Video-Review.mp4", thumbnail: "https://pub-0a0616f707eb40dfa8d6bc5829bad8d1.r2.dev/Reviews/thumbnails/Sahana-thumbnail.png", title: "Sahana's Bharatanatyam Journey", description: "Mom & Daughter Share Their Wonderful Bharatanatyam Experience" },
                        { url: "https://pub-0a0616f707eb40dfa8d6bc5829bad8d1.r2.dev/Reviews/Videos/Shanaya-Video-Review.mp4", thumbnail: "https://pub-0a0616f707eb40dfa8d6bc5829bad8d1.r2.dev/Reviews/thumbnails/Shanaya-thumbnail.png", title: "Shanaya Student Success", description: "Parent Shares Joyful Experience of Daughter Learning Bharatanatyam" },
                        { url: "https://pub-0a0616f707eb40dfa8d6bc5829bad8d1.r2.dev/Reviews/Videos/Aahika-Video-Review.mp4",thumbnail: "https://pub-0a0616f707eb40dfa8d6bc5829bad8d1.r2.dev/Reviews/thumbnails/Aahika-thumbnail.png", title: "Aahika's Learning : From First Steps to Stage", description: "A Special Message from the Kid & A Happy Review from Mom" },
                        { url: "https://pub-0a0616f707eb40dfa8d6bc5829bad8d1.r2.dev/Reviews/Videos/Advitha-Singh-Video-Review.mp4",thumbnail: "https://pub-0a0616f707eb40dfa8d6bc5829bad8d1.r2.dev/Reviews/thumbnails/Aadvita-Singh-thumbnail.png", title: "Advitha Singh Performance", description: "Young Bharatanatyam Dancer Showcasing Her Skills" },
                        { url: "https://pub-0a0616f707eb40dfa8d6bc5829bad8d1.r2.dev/Reviews/Videos/Mishika-Video-Review.mp4", thumbnail: "https://pub-0a0616f707eb40dfa8d6bc5829bad8d1.r2.dev/Reviews/thumbnails/Mishka-thumbnail.png", title: "Mishika Loving Her Classes", description: "Happy Mom Shares How Classes Stay Fun and Engaging" },
                        { url: "https://pub-0a0616f707eb40dfa8d6bc5829bad8d1.r2.dev/Reviews/Videos/Ojaswi-Video-Review.mp4", thumbnail: "https://pub-0a0616f707eb40dfa8d6bc5829bad8d1.r2.dev/Reviews/thumbnails/Ojaswi-thumbnail.png", title: "Ojaswi's Confident Progress", description: "Proud Mom Shares Her Daughter’s Growth in Bharatanatyam & Music" },
                        { url: "https://pub-0a0616f707eb40dfa8d6bc5829bad8d1.r2.dev/Reviews/Videos/Sanvitha-Video-Review.mp4",thumbnail: 'https://pub-0a0616f707eb40dfa8d6bc5829bad8d1.r2.dev/Reviews/thumbnails/Sanvitha-thumbnail.png', title: "Sanvitha’s Experience : Loving the Learning", description: "Confused About Online Learning? Hear This Parent’s Beautiful Story" },
                        { url: "https://pub-0a0616f707eb40dfa8d6bc5829bad8d1.r2.dev/Reviews/Videos/Supriya-Video-Review.mp4",thumbnail: 'https://pub-0a0616f707eb40dfa8d6bc5829bad8d1.r2.dev/Reviews/thumbnails/Supriya-thumbnail.png', title: "Supriya’s Learning Experience in Bharatanatyam", description: "Adult learner shares how the art of Adavus is mastered one at a time, with care and dedication." },
                        { url: "https://pub-0a0616f707eb40dfa8d6bc5829bad8d1.r2.dev/Reviews/Videos/Snehal-Patil-Video-Review.mp4",thumbnail: 'https://pub-0a0616f707eb40dfa8d6bc5829bad8d1.r2.dev/Reviews/thumbnails/Snehal-Patil-thumbnail.png', title: "Snehal Patil : From Learner to Performer", description: "Young Enthusiast’s Journey from Learning to Stage Performances" }
                    ].map((video, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-colors duration-300"
                        >
                            <div className="aspect-video relative">
                                {currentlyPlaying === video.url ? (
                                    <iframe
                                        src={video.url}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full rounded-t-2xl"
                                        onContextMenu={(e) => e.preventDefault()}
                                    />
                                ) : (
                                    <>
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-full object-cover rounded-t-2xl"
                                        />
                                        <div
                                            className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                            onClick={() => handleVideoPlay(video.url)}
                                        >
                                            <div className="w-16 h-16 bg-white/20  rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <Play className="h-8 w-8 text-white ml-1" />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-2">{video.title}</h3>
                                <p className="text-white/80 text-sm">{video.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-xl text-white/80 font-medium">
                        ... and many more inspiring stories
                    </p>
                </div>
            </div>
        </section>

      {/* Achievements Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
                    <p className="text-xl text-gray-600">
                        Real experiences from real students and their families
                    </p>
                </div>

                {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">*/}
                {/*  {testimonials.map((testimonial, index) => (*/}
                {/*    <div */}
                {/*      key={index}*/}
                {/*      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden"*/}
                {/*    >*/}
                {/*      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-coral-100 to-purple-100 rounded-bl-2xl flex items-center justify-center">*/}
                {/*        <Quote className="h-6 w-6 text-coral-500" />*/}
                {/*      </div>*/}
                {/*      */}
                {/*      <div className="flex items-center mb-6">*/}
                {/*        <Avatar name={testimonial.name} round={true} size="40" className="mr-2" maxInitials={2}/>*/}
                {/*        <div>*/}
                {/*          <h3 className="font-bold text-gray-900">{testimonial.name}</h3>*/}
                {/*          <p className="text-sm text-gray-600">{testimonial.role}</p>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*      */}
                {/*      <div className="flex mb-4">*/}
                {/*        {[...Array(testimonial.rating)].map((_, i) => (*/}
                {/*          <Star key={i} className="h-5 w-5 text-gold-400 fill-current" />*/}
                {/*        ))}*/}
                {/*      </div>*/}
                {/*      */}
                {/*      <p className="text-gray-700 leading-relaxed text-sm">*/}
                {/*        "{testimonial.content}"*/}
                {/*      </p>*/}
                {/*      */}
                {/*      <div className="mt-6">*/}
                {/*        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${*/}
                {/*          testimonial.category === 'parent' ? 'bg-coral-100 text-coral-700' :*/}
                {/*          testimonial.category === 'adult' ? 'bg-purple-100 text-purple-700' :*/}
                {/*          testimonial.category === 'teen' ? 'bg-gold-100 text-gold-700' :*/}
                {/*          testimonial.category === 'professional' ? 'bg-green-100 text-green-700' :*/}
                {/*          'bg-indigo-100 text-indigo-700'*/}
                {/*        }`}>*/}
                {/*          {testimonial.category === 'parent' ? 'Parent Review' :*/}
                {/*           testimonial.category === 'adult' ? 'Adult Student' :*/}
                {/*           testimonial.category === 'teen' ? 'Teen Student' :*/}
                {/*           testimonial.category === 'professional' ? 'Professional' :*/}
                {/*           'Organization'}*/}
                {/*        </span>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  ))}*/}
                {/*</div>*/}

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-5xl mx-auto"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden h-full">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-coral-100 to-purple-100 rounded-bl-2xl flex items-center justify-center">
                                        <Quote className="h-6 w-6 text-coral-500" />
                                    </div>

                                    <div className="flex items-center mb-6">
                                        {/*<img*/}
                                        {/*    src={testimonial.image}*/}
                                        {/*    alt={testimonial.name}*/}
                                        {/*    className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-gray-100"*/}
                                        {/*/>*/}
                                        <Avatar name={testimonial.name} round={true} maxInitials={2} size={"40"} className="mr-2 mb-1"/>
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
                          <span className="`inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700'">
                              {testimonial.state !== ''? testimonial.state +", "+ testimonial.country : testimonial.country}
                          </span>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>

        {/* Testimonials Grid */}

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

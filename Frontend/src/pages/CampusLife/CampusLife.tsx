import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Users,
  Calendar,
  Camera,
  Heart,
  Star,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Globe,
  Trophy,
  BookOpen,
  Music,
  Palette,
  Zap,
  Sparkles,
  ArrowRight,
} from "lucide-react";



const CampusLife = () => {
  const [activeTab, setActiveTab] = useState("campus");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0]);

  const activities = [
    {
      category: "Sports & Fitness",
      icon: Trophy,
      color: "from-red-500 to-pink-500",
      events: ["Championship League", "Yoga Sessions", "Adventure Club", "Marathon Training"]
    },
    {
      category: "Arts & Culture",
      icon: Palette,
      color: "from-purple-500 to-indigo-500",
      events: ["Art Exhibition", "Theater Productions", "Music Festival", "Cultural Night"]
    },
    {
      category: "Innovation & Tech",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      events: ["Hackathons", "Tech Talks", "Startup Pitch", "AI Workshop"]
    },
    {
      category: "Community Service",
      icon: Heart,
      color: "from-green-500 to-emerald-500",
      events: ["Community Outreach", "Environmental Drive", "Charity Events", "Mentorship Programs"]
    }
];

  const campusSpaces = [
    {
      title: "Innovation Hub",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "State-of-the-art collaborative workspace with VR labs and maker spaces",
      features: ["3D Printing Lab", "VR Studio", "AI Research Center", "Startup Incubator"]
    },
    {
      title: "Wellness Sanctuary",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Holistic wellness center featuring meditation pods and fitness facilities",
      features: ["Meditation Garden", "Fitness Center", "Yoga Studio", "Wellness Cafe"]
    },
    {
      title: "Creative Commons",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Multi-disciplinary creative space for art, music, and digital media",
      features: ["Recording Studio", "Art Gallery", "Design Lab", "Performance Stage"]
    },
    {
      title: "Social Central",
      image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Dynamic social hub with gaming lounges and collaborative dining",
      features: ["Gaming Lounge", "Food Court", "Study Pods", "Event Space"]
    }
  ];

  

  const testimonials = [
    {
      name: "Aria Chen",
      role: "Computer Science, Class of 2024",
      quote: "The innovation labs here turned my ideas into reality. I launched my startup right from campus!",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Business Administration, Class of 2023",
      quote: "Campus life here is transformative. The community, facilities, and opportunities are unmatched.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
    },
    {
      name: "Sofia Rodriguez",
      role: "Digital Arts, Class of 2024",
      quote: "From recording studios to art galleries, this campus nurtures creativity at every corner.",
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
    }
  ];

  const stats = [
    { number: "150+", label: "Student Clubs", icon: Users },
    { number: "24/7", label: "Campus Access", icon: Globe },
    { number: "98%", label: "Satisfaction Rate", icon: Star },
    { number: "50+", label: "Weekly Events", icon: Calendar }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPlaying) {
        setCurrentSlide((prev) => (prev + 1) % campusSpaces.length);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying, campusSpaces.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % campusSpaces.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + campusSpaces.length) % campusSpaces.length);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,119,198,0.3),transparent)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,119,198,0.2),transparent)] animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(56,178,172,0.2),transparent)] animate-pulse delay-2000" />
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div 
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          style={{ opacity }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <Sparkles className="w-20 h-20 mx-auto mb-8 text-yellow-400" />
          </motion.div>
          
          <motion.h1
            className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            CAMPUS
            <br />
            REIMAGINED
          </motion.h1>
          
          <motion.p
            className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Where innovation meets inspiration,
            <br />
            and dreams become reality
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25">
              <span className="relative z-10">Explore Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ArrowRight className="inline-block ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full text-xl font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300 backdrop-blur-sm">
              Virtual Tour
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Interactive Campus Spaces */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              IMMERSIVE SPACES
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every corner of our campus is designed to inspire, innovate, and ignite your potential
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Image Carousel */}
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={campusSpaces[currentSlide].image}
                    alt={campusSpaces[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all duration-300"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Content Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <motion.h3
                  key={`title-${currentSlide}`}
                  className="text-3xl md:text-4xl font-bold mb-3"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {campusSpaces[currentSlide].title}
                </motion.h3>
                <motion.p
                  key={`desc-${currentSlide}`}
                  className="text-lg text-gray-300 mb-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {campusSpaces[currentSlide].description}
                </motion.p>
                <motion.div
                  key={`features-${currentSlide}`}
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {campusSpaces[currentSlide].features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mb-8">
              {campusSpaces.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'bg-purple-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              ENDLESS POSSIBILITIES
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Dive into activities that fuel your passions and expand your horizons
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.category}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <activity.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {activity.category}
                </h3>
                
                <div className="space-y-2">
                  {activity.events.map((event, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-current" />
                      <span className="text-sm">{event}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              STUDENT VOICES
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real stories from students who are living their best campus life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-purple-500/30 group-hover:ring-purple-400/50 transition-all duration-300"
                  />
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic leading-relaxed group-hover:text-white transition-colors duration-300">
                  "{testimonial.quote}"
                </p>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,119,198,0.2),transparent)]" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-16 h-16 mx-auto mb-8 text-yellow-400" />
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              YOUR STORY
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                STARTS HERE
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join a community where every day is an opportunity to grow, create, and connect.
              Your extraordinary campus experience awaits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25">
                <span className="relative z-10">Join Our Community</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 rounded-full text-xl font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300 backdrop-blur-sm">
                Schedule Visit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
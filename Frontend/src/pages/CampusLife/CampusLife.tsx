import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
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
  GraduationCap,
  Lightbulb,
  Handshake,
  Laptop,
  Users2,
  Microscope,
  Bookmark,
  Shield,
  Leaf,
} from "lucide-react";
import { FaUser } from "react-icons/fa";

const CampusLife = () => {
  const [activeTab, setActiveTab] = useState("campus");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0]);

  const activities = [
    {
      category: "Student Clubs and Organizations",
      color: "from-green-400 to-green-600",
      icon: Users2,
      events: ["Promotes creativity", "Innovation", "Social responsibility"],
    },
    {
      category: "Industry Partnerships",
      color: "from-blue-400 to-blue-600",
      icon: Handshake,
      events: ["Real-world experiences", "Career opportunities"],
    },
    {
      category: "Leadership Development Workshops",
      color: "from-purple-400 to-purple-600",
      icon: Laptop,
      events: [
        "Cultivates critical thinking",
        "Communication",
        "Decision-making skills",
      ],
    },
    {
      category: "State-of-the-Art Learning Facilities",
      color: "from-amber-400 to-amber-600",
      icon: Leaf,
      events: [
        "Equipped with modern technology",
        "Foster interactive",
        "Hands-on learning experiences",
      ],
    },
    {
      category: "Community Outreach Initiatives",
      color: "from-orange-400 to-orange-600",
      icon: GraduationCap,
      events: [
        "Social impact projects",
        "Volunteerism",
        "Promoting civic responsibility",
      ],
    },
  ];

  return (
    <div className="py-20 min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          {/* Green Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-800" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.3),transparent)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(132,204,22,0.2),transparent)] animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(5,150,105,0.2),transparent)] animate-pulse delay-2000" />
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
            {/* Green Sparkles Icon */}
            <Sparkles className="w-20 h-20 mx-auto mb-8 text-green-400" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-emerald-300 via-lime-400 to-green-600 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Campus Life at
            <br />
            Veritas
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Where Growth Meets Opportunity
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-lime-400 to-green-500 rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Live the Veritas Life Section */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                Live the Veritas Life
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Veritas International Campus is more than just a place to learn –
              it’s a community that values collaboration, creativity, and
              personal growth. Our students are encouraged to engage in
              extracurricular activities that complement their studies, develop
              leadership skills, and network with industry professionals.
            </p>
          </motion.div>

          {/* Image Section with Hover Animation */}
          <motion.div
            className="order-1 md:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <img
                src="https://i.ibb.co/fdkPnLhL/1754983324936.jpg"
                alt="Students collaborating on campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-xl font-bold mb-2">
                  Collaborative Learning Spaces
                </h3>
                <p className="text-gray-200">
                  Designed to inspire innovation and teamwork
                </p>
              </div>
            </div>

            {/* Student Satisfaction Card with Hover Animation */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08, rotate: -1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">98%</p>
                  <p className="text-sm text-gray-500">Student Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{
                scale: 1.1,
                rotate: -2,
                boxShadow: "0px 4px 20px rgba(34, 197, 94, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
            >
              EXPLORE POSSIBILITIES
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Campus Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover activities and resources designed to enrich your academic
              journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.category}
                className="group relative p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${activity.color}`}
                />
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}
                >
                  <activity.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {activity.category}
                </h3>

                <div className="space-y-3">
                  {activity.events.map((event, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-3 text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + idx * 0.05,
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 rounded-full bg-current mt-2 flex-shrink-0" />
                      <span className="text-sm">{event}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          {/* Profile Card */}
          <div className="flex flex-col items-center text-center md:w-1/3 transform transition duration-300 hover:scale-105">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-200 to-teal-300 flex items-center justify-center text-4xl text-emerald-700 shadow-md">
              <FaUser />
            </div>

            <h3 className="mt-6 text-xl font-bold">Mr. Harshana Gamage</h3>
            <p className="text-emerald-600 font-medium">
              Chairman & Managing Director
            </p>
            <p className="text-sm text-gray-500">
              Veritas International Campus
            </p>

            <div className="mt-3">
              <a
                href="mailto:harshanamalindu2232@gmail.com"
                className="text-sm inline-flex items-center gap-2 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full hover:bg-emerald-50 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 12H8m0 0l4-4m-4 4l4 4"
                  />
                </svg>
                harshanamalindu2232@gmail.com
              </a>
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg md:w-2/3 transform transition duration-300 hover:scale-105">
            <div className="text-3xl text-gray-300 mb-4">“</div>
            <p className="text-gray-700 text-lg leading-relaxed">
              "At Veritas International Campus, our mission is to create a space
              where education is more than just learning; it's about molding the
              leaders of tomorrow who are ready to make a global impact. Our
              journey started in 2024, with a commitment to providing holistic
              education that empowers individuals not only academically but
              personally as well. We focus on building character, fostering
              creativity, and encouraging innovation in every student that walks
              through our doors."
            </p>
            <div className="mt-6 text-right">
              <p className="font-semibold">Mr. Harshana Gamage</p>
              <p className="text-emerald-600 text-sm">
                Chairman & Managing Director
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations & Campus Facilities Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Accreditations & Campus Excellence
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our learning spaces are designed to meet global standards,
              reflecting the credibility, comfort, and professionalism Veritas
              stands for.
            </p>
          </motion.div>

          {/* Classroom Images Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "https://i.ibb.co/84rgswqT/cls1.png",
              "src/assests/images/classroom2.jpeg",
              "src/assests/images/classroom3.jpeg",
              "src/assests/images/classroom4.jpeg",
              "src/assests/images/classroom5.jpeg",
            ].map((src, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={src}
                  alt={`Classroom ${index + 1}`}
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;

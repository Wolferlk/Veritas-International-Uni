import React from "react";
import { motion } from "framer-motion";
import {
  GlobeIcon,
  LightbulbIcon,
  CalendarIcon,
  GraduationCap,
  School,
  Briefcase,
} from "lucide-react";
import { Button } from "../../components/ui/button";

export const Home = (): JSX.Element => {
  const stats = [
    {
      title: "2024",
      subtitle: "Founded",
      icon: <CalendarIcon size={32} className="mb-2" />,
    },
    {
      title: "100%",
      subtitle: "Innovation Focus",
      icon: <LightbulbIcon size={32} className="mb-2" />,
    },
    {
      title: "Global",
      subtitle: "Perspective",
      icon: <GlobeIcon size={32} className="mb-2" />,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover filter blur-sm brightness-50 contrast-125"
            style={{
              filter: 'blur(2px) brightness(0.4) contrast(1.3)',
            }}
          >
            <source
              src="https://media.istockphoto.com/id/1302273587/video/laptop-on-a-table-at-the-end-of-an-aisle-of-books-in-a-library.mp4?s=mp4-640x640-is&k=20&c=HERTtG3ibKF0poAWZ8NrgIPbph1408m0jYwVOhS8mIM="
              type="video/mp4"
            />
            {/* Fallback image in case video doesn't load */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://www.gcc.edu/Portals/0/Images/1.3.2-campus_life-body-3-0723.jpg?ver=e2CLlzBj5mDL04ofjiiCGw%3D%3D')",
              }}
            />
          </video>
        </div>

        {/* Enhanced Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-teal-800/30 to-green-900/50" />
        
        {/* Additional Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Blurred Circle Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Veritas International
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent drop-shadow-lg">
                Campus
              </span>
            </motion.h1>

            {/* FIXED PARAGRAPH BLOCK */}
            <motion.p
              className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto px-4 py-3 drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Shaping Tomorrow's Leaders Today through academic excellence,
              innovation, and real-world relevance
            </motion.p>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-teal-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Apply Now
              </Button>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-14 justify-center items-center">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.2 }}
                  className="text-center group cursor-pointer transition-all duration-300 backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10"
                >
                  <div className="flex justify-center text-green-400 group-hover:text-white transition-colors duration-300 drop-shadow-lg">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-green-400 group-hover:text-white transition-colors duration-300 drop-shadow-lg">
                    {stat.title}
                  </div>
                  <div className="text-lg text-white group-hover:text-green-400 tracking-wide transition-colors duration-300 drop-shadow-md">
                    {stat.subtitle}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-12 text-center">
            Welcome to Veritas International Campus
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                <strong className="text-teal-600">
                  Veritas International Campus
                </strong>
                , as a bold and passionate start-up in the field of higher
                education, is driven by a singular mission: to shape
                future-ready individuals through academic excellence,
                innovation, and real-world relevance.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Founded on the belief that education unlocks human potential, we
                offer programs designed to equip students with global
                perspective and skills needed to thrive in a rapidly evolving
                world.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We embrace{" "}
                <span className="font-semibold text-teal-600">agility</span>,{" "}
                <span className="font-semibold text-teal-600">creativity</span>,
                and <span className="font-semibold text-teal-600">courage</span>
                . Every initiative at Veritas is crafted with purpose, pushing
                boundaries and nurturing minds that dare to think differently.
              </p>
            </div>

            {/* Animated Highlighted Values */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="p-6 bg-white shadow-lg rounded-xl border-l-4 border-teal-500"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  🎓 Academic Excellence
                </h3>
                <p className="text-gray-600">
                  Programs aligned with future industry standards and global
                  challenges.
                </p>
              </motion.div>

              <motion.div
                className="p-6 bg-white shadow-lg rounded-xl border-l-4 border-orange-400"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  💡 Innovation-Driven
                </h3>
                <p className="text-gray-600">
                  A start-up mindset encourages out-of-the-box thinking and
                  experimentation.
                </p>
              </motion.div>

              <motion.div
                className="p-6 bg-white shadow-lg rounded-xl border-l-4 border-green-500"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  🌍 Real-World Relevance
                </h3>
                <p className="text-gray-600">
                  Bridging theory with hands-on learning for career-ready
                  graduates.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Company History Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-teal-700 mb-4">
            Company History
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our journey began with a vision to revolutionize higher education
            through innovation and excellence.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Founded",
                desc: "Veritas was established in 2024",
                icon: "🎓",
              },
              {
                title: "Focus",
                desc: "Empower Learning, Inspire Growth",
                icon: "🎯",
              },
              {
                title: "Headquarters",
                desc: "Located in Panadura",
                icon: "📍",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Target Market Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-teal-700 mb-4">
            Target Market
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We serve diverse sectors within the academic and educational
            industries, providing specialized solutions for each student
            segment.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                group: "School Leavers",
                icon: <School className="w-10 h-10 text-teal-600 mx-auto" />,
              },
              {
                group: "Undergraduates",
                icon: (
                  <GraduationCap className="w-10 h-10 text-teal-600 mx-auto" />
                ),
              },
              {
                group: "Professionals",
                icon: <Briefcase className="w-10 h-10 text-teal-600 mx-auto" />,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-100 p-6 rounded-xl hover:bg-teal-50 transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.group}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Company Values Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-teal-700 mb-4">
            Company Values
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our core values guide everything we do, from curriculum development
            to student support services.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Honesty",
                icon: "❤️",
                desc: "We maintain transparency and integrity in all our operations, including academic and accreditation practices.",
              },
              {
                title: "Dependability",
                icon: "🛡️",
                desc: "Students and partners can always rely on us to deliver consistent, high-quality educational experiences.",
              },
              {
                title: "Client Satisfaction",
                icon: "🌟",
                desc: "We prioritize student success and satisfaction, ensuring every student achieves their potential.",
              },
              {
                title: "Ongoing Improvement",
                icon: "🔄",
                desc: "We continuously evolve to meet changing educational needs and global academic trends.",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-3 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Future Goals Section */}
      <motion.section
        className="py-20 bg-gray-50 shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-4xl mx-auto px-4 text-center bg-green-100 p-10 rounded-3xl shadow-sm"
          whileHover={{
            scale: 1.03,
            y: -5,
            boxShadow: "0px 12px 25px rgba(34, 197, 94, 0.25)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h2 className="text-4xl font-bold text-green-700 mb-6">
            Future Goals
          </h2>
          <p className="text-xl text-gray-700">
            To broaden our range of services and extend our geographic presence
            while upholding our dedication to top-quality educational services,
            thus contributing positively to the global education landscape's
            growth and sustainability.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

import React from "react";
import { motion } from "framer-motion";
import {
  AwardIcon,
  UsersIcon,
  BookOpenIcon,
  TrendingUpIcon,
  MapPinIcon,
} from "lucide-react";
import { Card } from "../../components/ui/card"; // Assumes Flowbite-style card

const features = [
  {
    icon: <AwardIcon className="w-8 h-8 text-white" />,
    title: "Accredited Programs",
    description: "Programs recognized globally for quality and impact.",
    bg: "from-emerald-500 to-teal-500",
  },
  {
    icon: <UsersIcon className="w-8 h-8 text-white" />,
    title: "Experienced Faculty",
    description: "Learn from professionals with real-world expertise.",
    bg: "from-blue-500 to-cyan-500",
  },
  {
    icon: <BookOpenIcon className="w-8 h-8 text-white" />,
    title: "Holistic Development",
    description: "We focus on academic, professional, and personal growth.",
    bg: "from-indigo-500 to-purple-500",
  },
  {
    icon: <MapPinIcon className="w-8 h-8 text-white" />,
    title: "Prime Location",
    description: "A vibrant campus in Panadura, close to opportunities.",
    bg: "from-pink-500 to-red-500",
  },
  {
    icon: <TrendingUpIcon className="w-8 h-8 text-white" />,
    title: "Future-Focused",
    description: "Stay ahead in an evolving educational world.",
    bg: "from-yellow-500 to-orange-500",
  },
];

const achievements = [
  { number: "25+", label: "Years of Excellence" },
  { number: "5000+", label: "Successful Graduates" },
  { number: "98%", label: "Employment Rate" },
  { number: "50+", label: "Industry Partners" },
];

export const WhyUs = (): JSX.Element => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Why Choose{" "}
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Veritas International?
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed">
              We go beyond education. We empower futures. Here's what makes us
              the best choice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-emerald-600 mb-4">
            Excellence in Every Aspect
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Discover what makes Veritas the preferred choice for ambitious
            students seeking world-class <br></br> education and transformative experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
                  <div
                    className={`mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${feature.bg} mb-4`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

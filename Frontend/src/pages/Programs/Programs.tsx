import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ClockIcon,
  AwardIcon,
  UsersIcon,
  BookOpenIcon,
  ArrowRightIcon,
  FilterIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const categories = ["All", "Business", "Technology", "Healthcare", "Creative"];
const levels = ["All", "Diploma", "Bachelor’s", "Master", "Doctoral"];

const programs = [
  {
    id: 1,
    title: "Diploma in HR Management",
    category: "Business",
    duration: "6 Months",
    level: "Diploma",
    students: "1,200+",
    rating: 4.9,
    price: "$1,299",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Master human resource management with comprehensive training in recruitment, employee relations, and strategic HR planning.",
    features: [
      "Industry Certification",
      "Career Support",
      "Flexible Schedule",
      "Expert Mentorship",
    ],
  },
  {
    id: 2,
    title: "Business Administration",
    category: "Business",
    duration: "12 Months",
    level: "Bachelor’s",
    students: "2,500+",
    rating: 4.8,
    price: "$2,499",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Comprehensive business education covering management, finance, marketing, and strategic planning.",
    features: [
      "MBA Pathway",
      "Industry Projects",
      "Networking Events",
      "Global Recognition",
    ],
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    category: "Technology",
    duration: "4 Months",
    level: "Diploma",
    students: "3,100+",
    rating: 4.9,
    price: "$899",
    image:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Learn cutting-edge digital marketing strategies including SEO, social media, and data analytics.",
    features: [
      "Hands-on Projects",
      "Google Certified",
      "Live Campaigns",
      "Job Guarantee",
    ],
  },
  {
    id: 4,
    title: "Healthcare Management",
    category: "Healthcare",
    duration: "8 Months",
    level: "Master",
    students: "850+",
    rating: 4.7,
    price: "$1,799",
    image:
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Specialized program for healthcare professionals focusing on management and administration.",
    features: [
      "Healthcare Focus",
      "Regulatory Training",
      "Leadership Skills",
      "Industry Connections",
    ],
  },
  {
    id: 5,
    title: "Web Development Bootcamp",
    category: "Technology",
    duration: "6 Months",
    level: "Bachelor’s",
    students: "1,800+",
    rating: 4.8,
    price: "$1,599",
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Full-stack web development program covering modern frameworks and technologies.",
    features: [
      "Portfolio Projects",
      "Tech Stack Training",
      "Job Placement",
      "Mentorship",
    ],
  },
  {
    id: 6,
    title: "Graphic Design Professional",
    category: "Creative",
    duration: "5 Months",
    level: "Diploma",
    students: "1,400+",
    rating: 4.6,
    price: "$1,199",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Creative design program covering branding, digital design, and visual communication.",
    features: [
      "Creative Portfolio",
      "Industry Software",
      "Client Projects",
      "Design Thinking",
    ],
  },
  {
    id: 7,
    title: "Doctorate in Data Science and AI",
    category: "Technology",
    duration: "36 Months",
    level: "Doctoral",
    students: "500+",
    rating: 4.95,
    price: "$6,999",
    image:
      "https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Advanced doctoral program focused on cutting-edge research in data science, machine learning, and artificial intelligence applications.",
    features: [
      "Research Publication Support",
      "Dedicated Thesis Advisor",
      "Access to AI Labs",
      "Global Research Community",
    ],
  },
];

export const Programs = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [filteredPrograms, setFilteredPrograms] = useState(programs);

  const filterPrograms = (category: string, level: string) => {
    let updated = programs;
    if (category !== "All") {
      updated = updated.filter((program) => program.category === category);
    }
    if (level !== "All") {
      updated = updated.filter((program) => program.level === level);
    }
    setFilteredPrograms(updated);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterPrograms(category, selectedLevel);
  };

  const handleLevelChange = (level: string) => {
    setSelectedLevel(level);
    filterPrograms(selectedCategory, level);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent pb-3">
                Programs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Discover world-class programs designed to accelerate your career
              and unlock your potential in today's competitive market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academic Overview Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-emerald-600 mb-6">
            Academic Programs
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Veritas International Campus offers a wide array of academic
            programs designed to suit various interests and career paths. Our
            curriculum is both comprehensive and flexible, ensuring that each
            student receives the necessary foundation to excel in their field.
          </p>
          <div className="text-gray-800 space-y-2 text-base">
            <p>
              Undergraduate Programs in Business, Marketing, Technology, and
              more
            </p>
            <p>
              Professional Diplomas in HR, Business Management, and Marketing
            </p>
            <p>
              Workshops and Skill Development Programs focusing on real world
              skills
            </p>
            <p>
              Internships and Placement Opportunities to enhance career prospect
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Filter */}
            <aside className="w-full lg:w-1/4 space-y-10">
              <div>
                <h3 className="flex items-center text-lg font-semibold text-gray-700 mb-3">
                  <FilterIcon className="w-5 h-5 mr-2" />
                  Filter by Category
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`block w-full text-left px-4 py-2 rounded-md transition ${
                        selectedCategory === category
                          ? "bg-teal-600 text-white font-semibold"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="flex items-center text-lg font-semibold text-gray-700 mb-3">
                  <BookOpenIcon className="w-5 h-5 mr-2" />
                  Filter by Level
                </h3>
                <div className="space-y-2">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => handleLevelChange(level)}
                      className={`block w-full text-left px-4 py-2 rounded-md transition ${
                        selectedLevel === level
                          ? "bg-emerald-600 text-white font-semibold"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Program Grid */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedCategory}-${selectedLevel}`}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {filteredPrograms.map((program, index) => (
                    <motion.div
                      key={program.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                    >
                      <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={program.image}
                            alt={program.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                          />
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                            {program.level}
                          </div>
                          <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                            {program.price}
                          </div>
                        </div>

                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-teal-600 font-medium">
                              {program.category}
                            </span>
                            <div className="flex items-center space-x-1">
                              <span className="text-yellow-400">★</span>
                              <span className="text-sm font-medium">
                                {program.rating}
                              </span>
                            </div>
                          </div>

                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {program.title}
                          </h3>

                          <p className="text-gray-600 mb-3 line-clamp-2">
                            {program.description}
                          </p>

                          <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <ClockIcon className="w-4 h-4" />
                              <span>{program.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <UsersIcon className="w-4 h-4" />
                              <span>{program.students}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-3">
                            {program.features.slice(0, 2).map((feature) => (
                              <span
                                key={feature}
                                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <Link
                              to={`/course/${program.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                            >
                              Learn More
                              <ArrowRightIcon className="ml-1 w-4 h-4" />
                            </Link>
                            <Button
                              className="bg-teal-600 hover:bg-teal-700 text-white"
                              size="sm"
                            >
                              Enroll Now
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We offer custom programs and corporate training solutions tailored
              to your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl"
                size="lg"
              >
                Contact Us
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold rounded-full"
                size="lg"
              >
                Custom Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

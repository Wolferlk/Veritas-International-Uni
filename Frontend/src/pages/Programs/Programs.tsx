import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FilterIcon,
  BookOpenIcon,
  ArrowRightIcon,
  Loader2Icon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

// Filters
const categories = ["All", "Business", "Technology", "Healthcare", "Creative", "Language"];
const levels = [
  "All",
  "Diploma",
  "Bachelor’s",
  "Master",
  "Doctoral",
  "Certificate",
];

// Programs data (truncated for brevity — keep your full list)
const programs = [
  {
    id: 1,
    title: "Certified Payroll Management Expert",
    category: "Business",
    duration: "3 Months",
    level: "Certificate",
    students: "850+",
    rating: 4.7,
    price: "$699",
    image:
      "https://images.pexels.com/photos/7821683/pexels-photo-7821683.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Gain expertise in payroll processes, compliance, and reporting with this practical certification designed for HR and finance professionals.",
    features: [
      "Hands-on Payroll Tools",
      "Legal Compliance Modules",
      "Flexible Online Access",
      "Certificate of Completion",
    ],
  },
  {
    id: 2,
    title: "Certificate in Strategic HR Analytics & Workforce Planning",
    category: "Business",
    duration: "3 Months",
    level: "Certificate",
    students: "950+",
    rating: 4.8,
    price: "$799",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Transform HR data into strategic insights to drive talent decisions and workforce optimization.",
    features: [
      "Real-world Case Studies",
      "Excel & Power BI Integration",
      "Workforce Forecasting Models",
      "Career Boost in HR Analytics",
    ],
  },
  {
    id: 3,
    title: "Certificate in Employer Branding & Talent Acquisition",
    category: "Business",
    duration: "3 Months",
    level: "Certificate",
    students: "770+",
    rating: 4.6,
    price: "$749",
    image:
      "https://images.pexels.com/photos/5989929/pexels-photo-5989929.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Attract top talent by building a strong employer brand and mastering modern recruitment strategies.",
    features: [
      "Employer Branding Frameworks",
      "Recruitment Funnel Techniques",
      "Live Projects",
      "Expert-Led Sessions",
    ],
  },
  {
    id: 4,
    title: "Professional Certificate in Content Creation",
    category: "Business",
    duration: "3 Months",
    level: "Certificate",
    students: "1,100+",
    rating: 4.9,
    price: "$599",
    image:
      "https://images.pexels.com/photos/6476588/pexels-photo-6476588.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Master content strategy, writing, video production, and social media storytelling to build impactful digital content.",
    features: [
      "Video & Visual Content Training",
      "SEO & Social Media Strategy",
      "Portfolio Development",
      "Mentorship from Creators",
    ],
  },
  {
    id: 5,
    title: "Diploma in English",
    category: "Language",
    duration: "6 Months",
    level: "Diploma",
    students: "1200+",
    rating: 4.8,
    price: "$499",
    image:
      "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Enhance your English language skills in grammar, vocabulary, and communication with this comprehensive diploma ideal for students and professionals.",
    features: [
      "Grammar & Vocabulary Mastery",
      "Spoken & Written Communication",
      "Interactive Online Lessons",
      "Diploma Certificate upon Completion",
    ],
  },
];

export const Programs = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [filteredPrograms, setFilteredPrograms] = useState(programs);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoadMoreLoading, setIsLoadMoreLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      filterPrograms(selectedCategory, selectedLevel);
      setLoading(false);
    }, 1000);
  }, [selectedCategory, selectedLevel]);

  const filterPrograms = (category: string, level: string) => {
    let updated = programs;
    if (category !== "All") {
      updated = updated.filter((program) => program.category === category);
    }
    if (level !== "All") {
      updated = updated.filter((program) => program.level === level);
    }
    setFilteredPrograms(updated);
    setVisibleCount(6); // reset to first 6 on filter change
  };

  const handleLoadMore = () => {
    setIsLoadMoreLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setIsLoadMoreLoading(false);
    }, 700); // simulate fetch delay
  };

  const visiblePrograms = filteredPrograms.slice(0, visibleCount);
  const hasMoreToLoad = visibleCount < filteredPrograms.length;

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
              Shape Your Future With Veritas
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Education
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Explore globally aligned diploma programs built to shape
              tomorrow’s leaders.
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
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-4 py-2 rounded-md ${
                      selectedCategory === cat
                        ? "bg-teal-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div>
                <h3 className="flex items-center text-lg font-semibold text-gray-700 mb-3">
                  <BookOpenIcon className="w-5 h-5 mr-2" />
                  Filter by Level
                </h3>
                {levels.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`block w-full text-left px-4 py-2 rounded-md ${
                      selectedLevel === lvl
                        ? "bg-emerald-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 space-y-6">
              {loading ? (
                <div className="flex justify-center items-center h-80">
                  <Loader2Icon className="animate-spin h-10 w-10 text-teal-600" />
                </div>
              ) : (
                <>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${selectedCategory}-${selectedLevel}-${visibleCount}`}
                      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {visiblePrograms.map((program) => (
                        <Card key={program.id} className="shadow-lg">
                          <img
                            src={program.image}
                            alt={program.title}
                            className="h-40 w-full object-cover"
                          />
                          <CardContent className="p-4 space-y-2">
                            <div className="flex justify-between text-sm text-gray-500">
                              <span>{program.category}</span>
                              <span>⭐ {program.rating}</span>
                            </div>
                            <h3 className="text-lg font-bold">
                              {program.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {program.description}
                            </p>
                            <div className="text-sm text-gray-500 flex justify-between">
                              <span>{program.duration}</span>
                              <span>{program.students}</span>
                            </div>
                            <div className="flex items-center justify-between pt-2">
                              <Link
                                to={`/course/${program.title
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="text-teal-600 text-sm flex items-center"
                              >
                                Learn More{" "}
                                <ArrowRightIcon className="ml-1 h-4 w-4" />
                              </Link>
                              <Button
                                size="sm"
                                className="bg-teal-600 text-white hover:bg-teal-700"
                              >
                                Enroll
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </motion.div>
                  </AnimatePresence>

                  {/* Load More Button */}
                  {hasMoreToLoad && (
                    <div className="flex justify-center pt-6">
                      <Button
                        onClick={handleLoadMore}
                        disabled={isLoadMoreLoading}
                      >
                        {isLoadMoreLoading ? (
                          <Loader2Icon className="animate-spin h-5 w-5 mr-2" />
                        ) : null}
                        {isLoadMoreLoading ? "Loading..." : "Load More"}
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

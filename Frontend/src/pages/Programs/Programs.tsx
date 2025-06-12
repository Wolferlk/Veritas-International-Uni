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
const categories = ["All", "Business", "Technology", "Healthcare", "Creative"];
const levels = ["All", "Diploma", "Bachelor’s", "Master", "Doctoral"];

// Programs data (truncated for brevity — keep your full list)
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
              Shape Your Future With Veritas Education
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Explore globally aligned diploma programs built to shape tomorrow’s leaders.
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

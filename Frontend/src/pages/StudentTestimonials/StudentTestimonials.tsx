import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  QuoteIcon,
  PlayIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    program: "Diploma in HR Management",
    year: "2023",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "The HR Management program at Veritas completely transformed my career. The practical approach and industry connections helped me land my dream job as an HR Manager within 3 months of graduation.",
    achievement: "HR Manager at Tech Solutions Inc.",
    video: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    program: "Web Development Bootcamp",
    year: "2023",
    rating: 5,
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "From zero coding experience to full-stack developer in 6 months! The instructors were amazing, and the hands-on projects gave me the confidence to start my own freelance business.",
    achievement: "Full-Stack Developer & Entrepreneur",
    video: false,
  },
  {
    id: 3,
    name: "Priya Patel",
    program: "Digital Marketing Mastery",
    year: "2024",
    rating: 5,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "The digital marketing course was incredibly comprehensive. I learned everything from SEO to social media advertising. Now I'm running successful campaigns for multiple clients.",
    achievement: "Digital Marketing Consultant",
    video: true,
  },
  {
    id: 4,
    name: "David Rodriguez",
    program: "Business Administration",
    year: "2023",
    rating: 5,
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "The business program provided me with a solid foundation in management principles. The case studies and real-world applications were invaluable for my career growth.",
    achievement: "Operations Manager at Global Corp",
    video: false,
  },
  {
    id: 5,
    name: "Emma Thompson",
    program: "Graphic Design Professional",
    year: "2024",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "The creative environment and expert guidance helped me develop my artistic skills. I now work with top brands and have my own design studio.",
    achievement: "Creative Director & Studio Owner",
    video: true,
  },
  {
    id: 6,
    name: "James Wilson",
    program: "Healthcare Management",
    year: "2023",
    rating: 5,
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "The healthcare management program equipped me with the skills needed to lead in the healthcare industry. The focus on both management and healthcare specifics was perfect.",
    achievement: "Hospital Administrator",
    video: false,
  },
];

const stats = [
  { number: "98%", label: "Job Placement Rate" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "5000+", label: "Success Stories" },
  { number: "95%", label: "Would Recommend" },
];

export const StudentTestimonials = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Business", "Technology", "Creative", "Healthcare"];

  const filteredTestimonials = selectedCategory === "All" 
    ? testimonials 
    : testimonials.filter(testimonial => 
        testimonial.program.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (selectedCategory === "Technology" && (testimonial.program.includes("Web Development") || testimonial.program.includes("Digital Marketing"))) ||
        (selectedCategory === "Creative" && testimonial.program.includes("Graphic Design")) ||
        (selectedCategory === "Healthcare" && testimonial.program.includes("Healthcare"))
      );

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
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
              Student
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Hear from our graduates who have transformed their careers and
              achieved their dreams through our programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-gray-600 font-medium">Filter by program:</span>
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-teal-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden shadow-2xl border-0">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2">
                      <div className="relative">
                        <img
                          src={filteredTestimonials[currentIndex]?.image}
                          alt={filteredTestimonials[currentIndex]?.name}
                          className="w-full h-full object-cover min-h-[400px]"
                        />
                        {filteredTestimonials[currentIndex]?.video && (
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <Button
                              size="lg"
                              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full w-16 h-16 p-0"
                            >
                              <PlayIcon className="w-8 h-8" />
                            </Button>
                          </div>
                        )}
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <QuoteIcon className="w-12 h-12 text-teal-600 mb-6" />
                        <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                          "{filteredTestimonials[currentIndex]?.quote}"
                        </blockquote>
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`w-5 h-5 ${
                                i < (filteredTestimonials[currentIndex]?.rating || 0)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {filteredTestimonials[currentIndex]?.name}
                          </h3>
                          <p className="text-teal-600 font-medium mb-1">
                            {filteredTestimonials[currentIndex]?.achievement}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {filteredTestimonials[currentIndex]?.program} • Class of {filteredTestimonials[currentIndex]?.year}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full w-12 h-12 p-0"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </Button>
              <div className="flex space-x-2">
                {filteredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex ? "bg-teal-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full w-12 h-12 p-0"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              More Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of successful graduates who have transformed their
              careers with our programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.slice(0, 6).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.program}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 text-sm leading-relaxed mb-4">
                      "{testimonial.quote.substring(0, 120)}..."
                    </blockquote>
                    <p className="text-teal-600 font-medium text-sm">
                      {testimonial.achievement}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our community of successful graduates and transform your career
              with our world-class programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl"
              >
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
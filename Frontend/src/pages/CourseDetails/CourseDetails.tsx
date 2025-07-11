import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import {
  ClockIcon,
  AwardIcon,
  UsersIcon,
  CheckCircleIcon,
  StarIcon,
  PlayIcon,
  TrendingUpIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const courseData = {
  "payroll-management": {
    title: "Certificate in Payroll Management",
    subtitle: "Master the essentials of payroll processing and compliance",
    duration: "3 Months",
    level: "Intermediate",
    price: "$799",
    rating: 4.8,
    students: "850+",
    image:
      "https://images.pexels.com/photos/4386322/pexels-photo-4386322.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "This course provides a comprehensive understanding of payroll systems, manual and automated processing, and legal compliance, equipping you with practical skills to manage payroll efficiently and accurately.",
    curriculum: [
      {
        module: "Module 1: Introduction to Payroll Management",
        topics: [
          "Overview of payroll systems and functions",
          "Roles and responsibilities of payroll professionals",
          "Importance of compliance and accuracy in payroll processing",
        ],
        duration: "1 week",
      },
      {
        module: "Module 2: Manual and Automated Payroll Processing",
        topics: [
          "Step-by-step manual payroll process",
          "Introduction to payroll software and automation tools",
          "Advantages and challenges of automation",
        ],
        duration: "1 week",
      },
      {
        module: "Module 3: Minimum Wage & Basic Remuneration",
        topics: [
          "Understanding minimum wage laws and industry-specific standards",
          "Calculating basic salary, cost of living adjustments, and statutory allowances",
        ],
        duration: "1 week",
      },
      {
        module: "Module 4: Computation of Overtime Payments",
        topics: [
          "Legal framework and eligibility criteria",
          "Calculation methods and rates for normal and holiday overtime",
        ],
        duration: "1 week",
      },
      {
        module: "Module 5: Staff Leave & Holiday Payments",
        topics: [
          "Types of leave (annual, casual, medical, etc.) and their entitlements",
          "Payment for public holidays and leave encashment procedures",
        ],
        duration: "1 week",
      },
      {
        module: "Module 6: Authorized Deductions",
        topics: [
          "Statutory and non-statutory deductions",
          "Legal considerations and employee consent",
        ],
        duration: "1 week",
      },
      {
        module: "Module 7: EPF & ETF Contributions",
        topics: [
          "Eligibility and contribution rates",
          "Employer vs. employee responsibilities",
          "Payment timelines and compliance reporting",
        ],
        duration: "1 week",
      },
      {
        module: "Module 8: EPF/ETF Registration & Compliance",
        topics: [
          "Registration procedures for employers and employees",
          "Common challenges and compliance best practices",
        ],
        duration: "1 week",
      },
    ],
    requirements: [
      "Basic understanding of accounting",
      "English proficiency",
      "Computer literacy",
      "Commitment to 5-10 hours per week",
    ],
    outcomes: [
      "Payroll Officer",
      "HR & Payroll Executive",
      "Compensation Analyst",
      "Payroll Administrator",
      "HR Assistant",
    ],
    features: [
      "Hands-on training with real-world payroll software",
      "Expert instructors with industry experience",
      "Flexible online learning with lifetime access",
      "Certificate of completion recognized by employers",
    ],
  },
};

export const CourseDetails = (): JSX.Element => {
  const { id } = useParams();
  const course =
    courseData[id as keyof typeof courseData] ||
    courseData["payroll-management"];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                {course.subtitle}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <ClockIcon className="w-5 h-5" />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AwardIcon className="w-5 h-5" />
                  <span className="text-sm">{course.level}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <UsersIcon className="w-5 h-5" />
                  <span className="text-sm">{course.students}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <StarIcon className="w-5 h-5 fill-current text-yellow-300" />
                  <span className="text-sm">{course.rating}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    size="lg"
                    className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl"
                  >
                    Enroll Now - {course.price}
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="overflow-hidden shadow-2xl border-0">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center"></div>
                </div>
                <CardContent className="p-6 bg-white">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AwardIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Professional Certificate
                    </h3>
                    <p className="text-gray-600">
                      Earn a recognized diploma that enhances your career
                      prospects
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Course Overview
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {course.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Curriculum */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Curriculum
                </h3>
                <div className="space-y-4">
                  {course.curriculum.map((module, index) => (
                    <Card
                      key={index}
                      className="border border-gray-200 hover:shadow-lg transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-lg font-semibold text-gray-900">
                            {module.module}
                          </h4>
                          <span className="text-sm text-teal-600 font-medium">
                            {module.duration}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {module.topics.map((topic, topicIndex) => (
                            <span
                              key={topicIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Entry Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Entry Requirements
                    </h3>
                    <ul className="space-y-3">
                      {course.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircleIcon className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {requirement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Career Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Career Opportunities
                    </h3>
                    <ul className="space-y-3">
                      {course.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <TrendingUpIcon className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {outcome}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Enroll Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-teal-600 to-emerald-600 text-white shadow-xl border-0">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
                    <p className="text-white/90 mb-4">
                      Join {course.students} students who have already enrolled
                    </p>
                    <div className="text-3xl font-bold mb-4">
                      {course.price}
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-white text-teal-600 hover:bg-gray-100 font-semibold"
                    >
                      Enroll Now
                    </Button>
                    <p className="text-xs text-white/70 mt-3">
                      30-day money-back guarantee
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  UserIcon,
  MailIcon,
  PhoneIcon,
  BookOpenIcon,
  CalendarIcon,
  CheckCircleIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const programs = [
  "Diploma in HR Management",
  "Business Administration",
  "Digital Marketing Mastery",
  "Healthcare Management",
  "Web Development Bootcamp",
  "Graphic Design Professional",
];

const steps = [
  {
    number: 1,
    title: "Personal Information",
    description: "Tell us about yourself",
    icon: UserIcon,
  },
  {
    number: 2,
    title: "Program Selection",
    description: "Choose your desired program",
    icon: BookOpenIcon,
  },
  {
    number: 3,
    title: "Application Review",
    description: "We'll review your application",
    icon: CheckCircleIcon,
  },
];

export const Register = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    startDate: "",
    experience: "",
    motivation: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
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
              Start Your
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Journey Today
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Take the first step towards transforming your career with our
              world-class education programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Steps Indicator */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                      currentStep >= step.number
                        ? "bg-teal-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {currentStep > step.number ? (
                      <CheckCircleIcon className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-24 h-1 mx-4 ${
                        currentStep > step.number ? "bg-teal-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              {steps.map((step) => (
                <div key={step.number} className="text-center flex-1">
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit}>
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Personal Information
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <div className="relative">
                            <UserIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                              placeholder="Enter your first name"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <div className="relative">
                            <UserIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                              placeholder="Enter your last name"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <MailIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <PhoneIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                              placeholder="Enter your phone number"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Program Selection
                      </h2>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Choose Your Program *
                          </label>
                          <div className="relative">
                            <BookOpenIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <select
                              name="program"
                              value={formData.program}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                              required
                            >
                              <option value="">Select a program</option>
                              {programs.map((program) => (
                                <option key={program} value={program}>
                                  {program}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Start Date *
                          </label>
                          <div className="relative">
                            <CalendarIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <input
                              type="date"
                              name="startDate"
                              value={formData.startDate}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Relevant Experience
                          </label>
                          <textarea
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder="Tell us about your relevant experience (optional)"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Why do you want to join this program? *
                          </label>
                          <textarea
                            name="motivation"
                            value={formData.motivation}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            placeholder="Share your motivation and goals"
                            required
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircleIcon className="w-10 h-10 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Application Summary
                      </h2>
                      <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <strong>Name:</strong> {formData.firstName} {formData.lastName}
                          </div>
                          <div>
                            <strong>Email:</strong> {formData.email}
                          </div>
                          <div>
                            <strong>Phone:</strong> {formData.phone}
                          </div>
                          <div>
                            <strong>Program:</strong> {formData.program}
                          </div>
                          <div>
                            <strong>Start Date:</strong> {formData.startDate}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">
                        Please review your information before submitting your application.
                        Our admissions team will contact you within 24 hours.
                      </p>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevious}
                        className="px-6 py-3"
                      >
                        Previous
                      </Button>
                    )}
                    <div className="ml-auto">
                      {currentStep < 3 ? (
                        <Button
                          type="button"
                          onClick={handleNext}
                          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3"
                        >
                          Next Step
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                        >
                          Submit Application
                        </Button>
                      )}
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
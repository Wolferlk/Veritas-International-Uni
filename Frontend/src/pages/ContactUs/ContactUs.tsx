import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const ContactPage: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const heroImageUrl =
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section with Navigation Space */}
      <div className="relative h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-blue-900 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>

        {/* Background Image with Parallax Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-1000"
          style={{
            backgroundImage: `url(${heroImageUrl})`,
          }}
        ></div>

        {/* Gradient Overlay for Better Navigation Contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-gray-800/80 to-blue-900/85"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-300/40 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-1/3 left-1/6 w-1 h-1 bg-white/40 rounded-full animate-bounce delay-300"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="transform translate-y-0 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                LET'S CONNECT
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 font-light tracking-wide">
                Ready to start your journey with{" "}
                <span className="font-semibold text-blue-300">Veritas</span>?
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-100 to-transparent rounded-full opacity-50"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-100 to-transparent rounded-full opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r text-teal-800 bg-clip-text text-transparent font-semibold text-sm tracking-wider uppercase">
                Get in Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              We're Here to Help
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Have questions or need support? Reach out to us—we're here to make
              your Veritas experience seamless and successful.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Main Contact Info - Glassmorphism Card */}
            <div className="lg:col-span-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative backdrop-blur-sm bg-white/80 p-10 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                  <div className="space-y-8">
                    {/* Phone */}
                    <div
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-emerald-50/50 transition-colors duration-200 cursor-pointer"
                      onMouseEnter={() => setIsHovered("phone")}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      <div
                        className={`p-3 rounded-full transition-all duration-200 ${
                          isHovered === "phone"
                            ? "bg-emerald-600 scale-110"
                            : "bg-emerald-100"
                        }`}
                      >
                        <Phone
                          className={`w-6 h-6 transition-colors duration-200 ${
                            isHovered === "phone"
                              ? "text-white"
                              : "text-emerald-600"
                          }`}
                        />
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold text-lg">
                          +94 77 789 7401 / +94 77 678 6371
                        </p>
                        <p className="text-gray-500 text-sm">Call us anytime</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-emerald-50/50 transition-colors duration-200 cursor-pointer"
                      onMouseEnter={() => setIsHovered("email")}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      <div
                        className={`p-3 rounded-full transition-all duration-200 ${
                          isHovered === "email"
                            ? "bg-emerald-600 scale-110"
                            : "bg-emerald-100"
                        }`}
                      >
                        <Mail
                          className={`w-6 h-6 transition-colors duration-200 ${
                            isHovered === "email"
                              ? "text-white"
                              : "text-emerald-600"
                          }`}
                        />
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold text-lg">
                          info.veritascampus@gmail.com
                        </p>
                        <p className="text-gray-500 text-sm">
                          Send us an email
                        </p>
                      </div>
                    </div>

                    {/* Location */}
                    <div
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-emerald-50/50 transition-colors duration-200 cursor-pointer"
                      onMouseEnter={() => setIsHovered("location")}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      <div
                        className={`p-3 rounded-full transition-all duration-200 ${
                          isHovered === "location"
                            ? "bg-emerald-600 scale-110"
                            : "bg-emerald-100"
                        }`}
                      >
                        <MapPin
                          className={`w-6 h-6 transition-colors duration-200 ${
                            isHovered === "location"
                              ? "text-white"
                              : "text-emerald-600"
                          }`}
                        />
                      </div>
                      <div>
                        <p className="text-gray-800 font-semibold text-lg">
                          Panadura, Sri Lanka
                        </p>
                        <p className="text-gray-500 text-sm">
                          Visit our office
                        </p>
                      </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex space-x-4 pt-6 border-t border-gray-200/50">
                      <div className="w-12 h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                        <Facebook className="w-6 h-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <div className="w-12 h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                        <Instagram className="w-6 h-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <div className="w-12 h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                        <Linkedin className="w-6 h-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Cards */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="relative backdrop-blur-sm bg-white/90 p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl">
                      <Clock className="text-emerald-600 w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-6 text-gray-800">
                    Business Hours
                  </h3>
                  <div className="space-y-3 text-sm">
                    {[
                      { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
                      { day: "Saturday", time: "10:00 AM - 4:00 PM" },
                      { day: "Sunday", time: "Closed" },
                    ].map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-2 rounded-lg hover:bg-emerald-50/50 transition-colors"
                      >
                        <span className="font-medium text-gray-700">
                          {schedule.day}:
                        </span>
                        <span className="text-gray-600">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Chat */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="relative backdrop-blur-sm bg-white/90 p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl">
                      <MessageCircle className="text-emerald-600 w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                    LiveChat
                  </h3>
                  <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">
                    Get instant help from our customer service team through
                    WhatsApp chat
                  </p>
                  <button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Start Chat</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="relative backdrop-blur-sm bg-white/80 rounded-3xl shadow-2xl p-12 border border-white/20 hover:shadow-3xl transition-all duration-500">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full mb-8 shadow-lg">
                  <Mail className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
                  Ready to get in touch? Click the button below to send us an
                  email directly and let's begin this journey together.
                </p>
                <a
                  href="mailto:info.veritascampus@gmail.com"
                  className="inline-flex items-center space-x-4 bg-teal-600 hover:bg-teal-700 text-white px-10 py-5 rounded-2xl transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 active:scale-95 group"
                >
                  <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Send Email</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
                <p className="text-sm text-gray-500 mt-6 font-medium">
                  info.veritascampus@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

import React, { useState, useEffect } from "react";

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FadeInUp: React.FC<AnimationProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const SlideInLeft: React.FC<AnimationProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const SlideInRight: React.FC<AnimationProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-ping"
            style={{ animationDuration: "4s" }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
          <div className="w-full text-center">
            <FadeInUp>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                ABOUT US
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Empowering minds, shaping futures through innovative education
                and global excellence
              </p>
              <a
                href="#contact"
                className="inline-block bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:transform hover:scale-105 backdrop-filter backdrop-blur-lg border border-white border-opacity-30"
              >
                Contact Us
              </a>
            </FadeInUp>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Leadership Message Section */}
      <section className="py-20 bg-white" id="leadership">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <SlideInLeft className="lg:w-1/2" delay={200}>
              <div className="bg-gradient-to-br from-green-400 to-blue-500 p-1 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="bg-white p-8 rounded-2xl h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                      Leadership Message
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    At Veritas International Campus, our mission is to create a
                    space where education is more than just learning. It's about
                    moving the leaders of tomorrow who are ready to make a
                    global impact. Our journey started in 2008 with a commitment
                    to providing quality education that empowers individuals not
                    only academically but personally as well. We focus on
                    building character, fostering creativity, and nurturing the
                    skills necessary to thrive in our future workforce.
                  </p>
                  <div className="border-l-4 border-green-400 pl-4">
                    <p className="text-gray-700 font-medium italic">
                      "Education is the most powerful weapon which you can use
                      to change the world."
                    </p>
                    <p className="text-green-600 font-semibold mt-2">
                      - Mr. Manjula Gamage (Founder)
                    </p>
                  </div>
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight className="lg:w-1/2" delay={400}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 blur animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-3xl">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    VERITAS INTERNATIONAL
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Building tomorrow's leaders through innovative education,
                    character development, and global perspective since 2008.
                  </p>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <FadeInUp className="text-center mb-16" delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              Our Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-12">
            <SlideInLeft delay={300}>
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Veritas International Campus offers a premium quality of
                  education with excellent service focused on global development
                  and comes with. Our Vision is to become an internationally
                  recognized center of excellence that inspires lifelong
                  learning and personal growth.
                </p>
              </div>
            </SlideInLeft>

            <SlideInRight delay={500}>
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  We strive to deliver transformative educational experiences
                  that make lifelong learning, independent and ethical actions
                  and an engagement with community responsibilities. Our mission
                  continues.
                </p>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Accreditations & Partnerships Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FadeInUp className="text-center mb-16" delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              Accreditations & Partnerships
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our commitment to excellence is recognized by leading educational
              bodies and international partners worldwide.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item, index) => (
              <FadeInUp key={item} delay={200 + index * 100}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="font-bold text-center text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    Partner {item}
                  </h4>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900"
      >
        <div className="container mx-auto px-6 text-center">
          <FadeInUp>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Join Our Journey?
            </h2>
            <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
              Take the first step towards an exceptional educational experience
              with Veritas International.
            </p>
            <button className="bg-white text-indigo-900 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
              Get In Touch
            </button>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

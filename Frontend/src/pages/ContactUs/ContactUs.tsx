import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const ContactPage: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // You can change this URL to your own image
  const heroImageUrl =
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-r from-green-600 to-green-800 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImageUrl})`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/70"></div>
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              CONTACT US
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 drop-shadow-md">
              Let's have a discussion
            </p>

            {/* <div className="mt-8">
              <div className="inline-block bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-lg">
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-medium">Phone Contact</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-medium">Email</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <Send className="w-4 h-4" />
                    </div>
                    <span className="font-medium">Contact Form</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or need support? Reach out to us—we're here to make
              your Veritas experience seamless and successful.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Card */}
            <div className="lg:col-span-2">
              <div className="bg-green-50 p-8 rounded-lg">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-green-600 w-5 h-5" />
                    <div>
                      <p className="text-gray-800 font-medium">
                        +94 77 789 7401 / +94 77 678 6371
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="text-green-600 w-5 h-5" />
                    <div>
                      <p className="text-gray-800 font-medium">
                        info.veritascampus@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="text-green-600 w-5 h-5" />
                    <div>
                      <p className="text-gray-800 font-medium">
                        Panadura, Sri Lanka
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                      <span className="text-white text-sm font-bold">f</span>
                    </div>
                    <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                      <span className="text-white text-sm">📷</span>
                    </div>
                    <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                      <span className="text-white text-sm font-bold">in</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours and Live Chat */}
            <div className="space-y-6">
              {/* Business Hours Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="text-green-600 w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Live Chat Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="flex items-center justify-center mb-4">
                  <MessageCircle className="text-green-600 w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-4">
                  LiveChat
                </h3>
                <p className="text-sm text-gray-600 text-center mb-4">
                  Get instant help from our customer service team through
                  whatsapp chat
                </p>
                <button
                  onClick={() => setIsChatOpen(!isChatOpen)}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                >
                  Start Chat
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Send us a Message
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your last name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div className="md:col-span-2 text-center">
                <button
                  type="button"
                  onClick={() => alert("Message sent! (This is a demo)")}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

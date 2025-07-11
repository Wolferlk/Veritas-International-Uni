import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Star, Wine } from "lucide-react";
import duty_free from '../../assests/images/duty_free.png';
import Partners from "../Partners/Partners";
import partner1 from '../../assests/images/partner1.png';
import  ship from '../../assests/images/ship.png';

export const Subsidiaries = (): JSX.Element => {
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
              Subsidiaries
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Discover our diverse portfolio of companies dedicated to excellence in retail and education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Veritas Section */}
      <section className="relative bg-[#f9f9f9] py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="backdrop-blur-md bg-white/70 border border-white/40 shadow-xl rounded-3xl p-10 grid md:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={duty_free}
              alt="Veritas International"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 uppercase">
                Veritas International (PVT) Ltd
              </h2>
              <p className="text-lg text-gray-600 mb-2">
                <span className="text-cyan-700 font-medium">
                  Premium duty-free wine store
                </span>{" "}
                located in the prestigious Colombo Port
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Experience our exclusive duty-free wine store at Colombo Port, offering a curated selection of
                premium wines and spirits from around the world. Perfect for travelers seeking quality beverages at competitive prices.
              </p>

              <div className="flex items-center gap-4 text-gray-700 mb-3">
                <MapPin className="w-5 h-5 text-emerald-500" />
                Colombo Port, Sri Lanka
              </div>
              <div className="flex items-center gap-4 text-gray-700 mb-6">
                <Phone className="w-5 h-5 text-emerald-500" />
                0716464746
              </div>

              {/* Feature Highlights */}
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div
                  className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Wine className="w-5 h-5 text-pink-500" />
                    <h4 className="font-semibold text-gray-800 text-lg">
                      Premium Selections
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Curated collection of fine wines and spirits from renowned vineyards worldwide.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <h4 className="font-semibold text-gray-800 text-lg">
                      Duty-Free Benefits
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Enjoy tax-free shopping with competitive pricing exclusive to our port location.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Sample Subsidiary Card */}
          <motion.div
            className="backdrop-blur-md bg-white/70 border border-white/40 shadow-xl rounded-3xl p-10 grid md:grid-cols-2 gap-10 items-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={ship}
              alt="Ship"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 uppercase">
                VERITAS INTERNATIONAL (PVT) LTD
              </h2>
              <p className="text-lg text-gray-600 mb-2">
                <span className="text-cyan-700 font-medium">
                  Premier ship chandlers in Sri Lanka
                </span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Veritas International Pvt Ltd is a premier ship chandling company dedicated to providing exceptional services to the maritime industry. With its headquarters strategically located in Sri Lanka, Veritas International has grown to become a trusted partner for ship owners, operators, and managers across the globe.
              </p>

              <div className="flex items-center gap-4 text-gray-700 mb-3">
                <MapPin className="w-5 h-5 text-emerald-500" />
                Colombo, Sri Lanka
              </div>
              <div className="flex items-center gap-4 text-gray-700 mb-3">
                <Phone className="w-5 h-5 text-emerald-500" />
                +94 (71) 646 4746
              </div>
              <div className="flex items-center gap-4 text-gray-700 mb-6">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v1a4 4 0 01-8 0v-1m8 0V9a4 4 0 00-8 0v3" /></svg>
                info.veritasinternational@gmail.com
              </div>

              {/* Feature Highlights */}
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div
                  className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-gray-800 text-lg">
                      VISION
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 whitespace-pre-line">
                    To revolutionize the maritime industry by setting the standard for excellence in service, innovation, and sustainability, fostering long-term partnerships and creating a safer, more efficient, and environmentally responsible future for maritime operations.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {/* Flag icon for Mission */}
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 22V4a2 2 0 0 1 2-2h11.5a1.5 1.5 0 0 1 0 3H6"/><path d="M6 6h13a1 1 0 0 1 0 2H6"/></svg>
                    <h4 className="font-semibold text-gray-800 text-lg">
                      MISSION
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 whitespace-pre-line">
                    To be the premier partner for maritime vessels, delivering unparalleled service, high-quality products, and dependable support to ensure seamless operations and ultimate client satisfaction.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Partners />
    </div>
  );
};

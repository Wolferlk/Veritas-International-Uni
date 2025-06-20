import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Star, Wine } from "lucide-react";
import duty_free from '../../assests/images/duty_free.png';

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
        </div>
      </section>
    </div>
  );
};

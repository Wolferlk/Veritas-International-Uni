import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaUsers } from 'react-icons/fa';

const OurTeam = () => {
    return (
        <div className="pt-20">
            <section className="py-20 bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-600 text-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Chairmen's
                            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent pb-7">
                                Message
                            </span>
                        </h1>

                    </motion.div>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

                    {/* Profile Card */}
                    <div className="flex flex-col items-center text-center md:w-1/3 transform transition duration-300 hover:scale-105">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-200 to-teal-300 flex items-center justify-center text-4xl text-emerald-700 shadow-md">

                            <FaUser />
                        </div>

                        <h3 className="mt-6 text-xl font-bold">Mr. Harshana Gamage</h3>
                        <p className="text-emerald-600 font-medium">Chairman & Managing Director</p>
                        <p className="text-sm text-gray-500">Veritas International Campus</p>

                        <div className="mt-3">
                            <a href="mailto:harshanamalindu2232@gmail.com" className="text-sm inline-flex items-center gap-2 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full hover:bg-emerald-50 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12H8m0 0l4-4m-4 4l4 4" />
                                </svg>
                                harshanamalindu2232@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Quote Section */}
                    <div className="bg-gray-50 p-8 rounded-xl shadow-lg md:w-2/3 transform transition duration-300 hover:scale-105">
                        <div className="text-3xl text-gray-300 mb-4">“</div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            "At Veritas International Campus, our mission is to create a space where education is more than just learning;
                            it's about molding the leaders of tomorrow who are ready to make a global impact. Our journey started in 2024,
                            with a commitment to providing holistic education that empowers individuals not only academically but personally as well.
                            We focus on building character, fostering creativity, and encouraging innovation in every student that walks through our doors."
                        </p>
                        <div className="mt-6 text-right">
                            <p className="font-semibold">Mr. Harshana Gamage</p>
                            <p className="text-emerald-600 text-sm">Chairman & Managing Director</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default OurTeam
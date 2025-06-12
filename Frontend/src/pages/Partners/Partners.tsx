import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import gimg from '../../assests/images/gamage.png';
import { FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const Partners = () => {
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
                            Our
                            <span className="ml-4 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                                Partners
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                            We are proud to collaborate with leading companies that support our mission.
                        </p>
                    </motion.div>
                </div>
            </section>
            {/* Gamage Recruiters Card */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="bg-white shadow-lg rounded-xl p-8 max-w-4xl mx-auto transform transition duration-300 hover:scale-105">
                        <div className="flex items-center space-x-4 mb-4">
                            <img src={gimg} alt="Gamage Logo" className="w-16 h-16 rounded-full bg-black p-2 border-2 border-green-600" />
                            <div>
                                <h2 className="text-2xl font-bold text-green-700">Gamage Recruiters</h2>
                                <div className="text-sm text-gray-600 flex items-center gap-4 mt-1">
                                    <span className="flex items-center gap-1">
                                        <FaMapMarkerAlt className="text-red-600" /> Sri Lanka
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaCalendarAlt className="text-black-600" /> Est. 2019
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-6">
                            Gamage Recruiters is a Sri Lankan–based recruitment and talent acquisition company that specializes in connecting skilled professionals with top employers across various industries. With a strong focus on quality, professionalism, and personalized service, Gamage Recruiters supports both job seekers and organizations by offering tailored hiring solutions. Their goal is to bridge the gap between talent and opportunity, fostering growth and success for individuals and businesses alike.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-semibold text-green-600 mb-2">🛠 Specialties</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Headhunting</li>
                                    <li>Professional Resume Writing</li>
                                    <li>Interview Preparation</li>
                                    <li>HR Consultancy</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-green-600 mb-2">🏆 Key Achievements</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>1000+ Successful Placements</li>
                                    <li>200+ Client Companies</li>
                                    <li>5+ Years in Business</li>
                                    <li>15+ Industry Sectors</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Partners
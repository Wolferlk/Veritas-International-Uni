import React from 'react'
import { motion, AnimatePresence } from "framer-motion";


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

        </div>
    )
}

export default Partners
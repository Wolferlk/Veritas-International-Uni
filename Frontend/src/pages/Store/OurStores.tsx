import React from "react";
import { motion } from "framer-motion";

const OurStore = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-600 text-white text-center">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="mb-2 text-sm font-medium bg-white text-emerald-700 inline-block px-4 py-1 rounded-full">
                            Colombo Harbor • Duty-Free Excellence
                        </p>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            Our{" "}
                            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                                Store
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                            Your Trusted Maritime Partner in Colombo Harbor – Premium duty-free shopping experience for maritime professionals
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Maritime Excellence Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-emerald-700 mb-6">
                        Maritime Excellence Since Day One
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                        Located within the heart of Sri Lanka’s busiest and most strategic port, Veritas International (Pvt) Ltd operates a fully equipped duty-free shop dedicated to serving vessels, tug crews, and all maritime personnel calling at Colombo Harbor.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-white p-6 rounded-2xl shadow">
                            <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                                Strategic Harbor Location
                            </h3>
                            <p className="text-gray-600">
                                An establishment at the harbor’s gateway ensures easy access, quick service, and exceptional logistics for all visiting ships.
                            </p>
                        </div>
                        <div className="md:col-span-2 grid grid-cols-2 gap-4">
                            <img
                                src="/images/store1.jpg"
                                alt="Store Interior"
                                className="rounded-xl shadow"
                            />
                            <img
                                src="/images/store2.jpg"
                                alt="Duty-Free Products"
                                className="rounded-xl shadow"
                            />
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow">
                            <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                                Quality & Reliability
                            </h3>
                            <p className="text-gray-600">
                                We deliver a wide variety of duty-free items with consistent quality, availability, and pricing.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow">
                            <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                                Trusted Partnership
                            </h3>
                            <p className="text-gray-600">
                                Whether you're part of a long-range crew or making a short visit, we’re your go-to destination for trusted supplies at Colombo Harbor.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services & Products Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-emerald-700 mb-4">
                        Our Services & Products
                    </h2>
                    <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                        Comprehensive duty-free solutions tailored for maritime professionals and international vessels
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        {[
                            { title: "Branded Liquors & Tobacco", desc: "Premium duty-free liquors and cigars" },
                            { title: "Confectionery & Snacks", desc: "Fine snacks for crew and officers alike" },
                            { title: "Personal Care Products", desc: "Hygiene and self-care essentials" },
                            { title: "Household Items", desc: "General provisions for onboard use" },
                            { title: "Specialty Products", desc: "Products tailored for deep-sea professionals" },
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                                <h3 className="text-lg font-semibold text-emerald-700 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurStore;

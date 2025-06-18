import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import logo from "../../assests/images/logo.png";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Why Us", href: "/why-us" },
  { name: "Programs", href: "/programs" },
  { name: "Register", href: "/register" },
  { name: "Subsidiaries", href: "/subsidiaries" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Campus Life", href: "/campus-life" },
];

export const Navigation = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Floating Orbs Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-40">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl"
          animate={{
            x: mousePosition.x * -0.015,
            y: mousePosition.y * -0.015,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 15 }}
        />
      </div>

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-black/10"
            : "bg-gradient-to-r from-black/5 to-transparent backdrop-blur-sm"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        {/* Animated top border */}
        <motion.div
          className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 0.5 }}
        />

        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <motion.div
              className="flex items-center space-x-4 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.div
                className="relative w-14 h-14 rounded-2xl overflow-hidden"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0" />
                <div className="relative flex items-center justify-center h-full">
                  <motion.img
                    src={logo}
                    alt="Logo"
                    className="object-contain"
                    whileHover={{ scale: 1.1 }}
                  />
                  <motion.div
                    className="absolute -top-1 -right-1"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="w-3 h-3 text-yellow-300" />
                  </motion.div>
                </div>
              </motion.div>

              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <motion.h1
                  className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Veritas International
                </motion.h1>
                <motion.p
                  className="text-sm text-gray-600 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Future-Ready Campus
                </motion.p>
              </div>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="relative group"
                >
                  <Link
                    to={item.href}
                    className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full group overflow-hidden ${
                      location.pathname === item.href
                        ? "text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 shadow-lg shadow-green-500/25"
                        : "text-black hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>

                    {/* Enhanced hover background */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-green-700/60 to-emerald-700/60 backdrop-blur-md opacity-0 group-hover:opacity-90 transition-opacity duration-300"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Active indicator */}
                    {location.pathname === item.href && (
                      <motion.div
                        className="absolute -bottom-2 left-1/2 w-1 h-1 bg-white rounded-full"
                        layoutId="activeIndicator"
                        initial={false}
                        style={{ x: "-50%" }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Enhanced Apply Now Button */}
            <div className="hidden lg:block">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link to="/register">
                  <Button className="relative group bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full font-semibold shadow-xl shadow-teal-500/25 border border-white/20 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Apply Now</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </span>

                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full"
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="lg:hidden mt-6 pb-6"
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
              >
                <motion.div
                  className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-6 shadow-2xl"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <nav className="flex flex-col space-y-3">
                    {navigationItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.href}
                          className={`px-4 py-3 text-sm font-semibold rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                            location.pathname === item.href
                              ? "text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 shadow-lg shadow-green-500/25"
                              : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-green-900/25 hover:to-emerald-900/25 hover:backdrop-blur-lg"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span>{item.name}</span>
                          <motion.div
                            className="opacity-0 group-hover:opacity-100"
                            whileHover={{ x: 4 }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </Link>
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: navigationItems.length * 0.1 }}
                      className="pt-4"
                    >
                      <Link to="/register">
                        <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-2xl font-semibold shadow-lg flex items-center justify-center space-x-2">
                          <span>Apply Now</span>
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </motion.div>
                  </nav>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};

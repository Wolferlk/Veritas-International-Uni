import React from "react";
import { motion } from "framer-motion";
import {
  AwardIcon,
  UsersIcon,
  BookOpenIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  ClockIcon,
  GlobeIcon,
  HeartIcon,
} from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";

const reasons = [
  {
    icon: AwardIcon,
    title: "Industry Recognition",
    description: "Our programs are recognized by leading industry bodies and employers worldwide.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: UsersIcon,
    title: "Expert Faculty",
    description: "Learn from industry professionals with years of real-world experience.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: BookOpenIcon,
    title: "Cutting-Edge Curriculum",
    description: "Stay ahead with our constantly updated curriculum that reflects industry trends.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: TrendingUpIcon,
    title: "Career Growth",
    description: "98% of our graduates report career advancement within 6 months.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: ShieldCheckIcon,
    title: "Quality Assurance",
    description: "Rigorous quality standards ensure you receive the best education possible.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: ClockIcon,
    title: "Flexible Learning",
    description: "Study at your own pace with our flexible online and hybrid programs.",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: GlobeIcon,
    title: "Global Network",
    description: "Join a worldwide community of alumni and industry professionals.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: HeartIcon,
    title: "Student Support",
    description: "Dedicated support team to help you succeed throughout your journey.",
    color: "from-pink-500 to-pink-600",
  },
];

const achievements = [
  { number: "25+", label: "Years of Excellence" },
  { number: "5000+", label: "Successful Graduates" },
  { number: "98%", label: "Employment Rate" },
  { number: "50+", label: "Industry Partners" },
];

export const WhyUs = (): JSX.Element => {
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
              Why Choose
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Veritas International?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              We're not just an educational institution – we're your partner in
              building a successful future. Here's what sets us apart.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unique advantages that make Veritas International Campus
              the preferred choice for ambitious learners.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <reason.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To provide world-class education that empowers individuals to achieve
                their career goals and contribute meaningfully to society. We believe
                in nurturing not just academic excellence, but also personal growth
                and professional development.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment extends beyond the classroom, offering comprehensive
                support, industry connections, and lifelong learning opportunities
                that ensure our graduates remain competitive in an ever-evolving
                global marketplace.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-8 text-white">
                <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg leading-relaxed mb-6">
                  To be the leading international educational institution that
                  transforms lives through innovative learning experiences and
                  creates tomorrow's leaders.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full" />
                    <span>Excellence in Education</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full" />
                    <span>Innovation in Learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full" />
                    <span>Global Impact</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
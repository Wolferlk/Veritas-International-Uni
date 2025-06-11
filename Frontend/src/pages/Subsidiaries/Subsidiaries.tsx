import React from "react";
import { motion } from "framer-motion";
import {
  BuildingIcon,
  GlobeIcon,
  UsersIcon,
  TrendingUpIcon,
  AwardIcon,
  MapPinIcon,
} from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";

const subsidiaries = [
  {
    name: "Veritas Business School",
    location: "Colombo, Sri Lanka",
    established: "2018",
    students: "2,500+",
    programs: "15+",
    image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Premier business education institution focusing on MBA and executive programs.",
    specialties: ["MBA Programs", "Executive Education", "Corporate Training", "Leadership Development"],
  },
  {
    name: "Veritas Tech Institute",
    location: "Kandy, Sri Lanka",
    established: "2020",
    students: "1,800+",
    programs: "12+",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Cutting-edge technology education with focus on emerging technologies and innovation.",
    specialties: ["Software Development", "Data Science", "AI & Machine Learning", "Cybersecurity"],
  },
  {
    name: "Veritas Healthcare Academy",
    location: "Galle, Sri Lanka",
    established: "2019",
    students: "1,200+",
    programs: "8+",
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Specialized healthcare education and professional development programs.",
    specialties: ["Healthcare Management", "Nursing Education", "Medical Technology", "Public Health"],
  },
  {
    name: "Veritas Creative Arts College",
    location: "Negombo, Sri Lanka",
    established: "2021",
    students: "900+",
    programs: "10+",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Creative arts and design education fostering innovation and artistic excellence.",
    specialties: ["Graphic Design", "Digital Arts", "Photography", "Interior Design"],
  },
  {
    name: "Veritas Online University",
    location: "Global (Online)",
    established: "2022",
    students: "5,000+",
    programs: "25+",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Comprehensive online education platform serving students worldwide.",
    specialties: ["Distance Learning", "Professional Certificates", "Micro-credentials", "Corporate Training"],
  },
  {
    name: "Veritas Research Center",
    location: "Moratuwa, Sri Lanka",
    established: "2017",
    students: "300+",
    programs: "5+",
    image: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Advanced research and development center focusing on innovation and technology transfer.",
    specialties: ["Research Programs", "Innovation Labs", "Technology Transfer", "Industry Partnerships"],
  },
];

const stats = [
  { number: "12,000+", label: "Total Students", icon: UsersIcon },
  { number: "6", label: "Campuses", icon: BuildingIcon },
  { number: "75+", label: "Programs", icon: AwardIcon },
  { number: "15+", label: "Countries", icon: GlobeIcon },
];

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
              Our
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Network
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Discover our family of educational institutions, each specializing
              in different fields to provide comprehensive learning opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidiaries Grid */}
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
              Our Institutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each of our institutions is designed to excel in specific fields,
              providing specialized education and training.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {subsidiaries.map((subsidiary, index) => (
              <motion.div
                key={subsidiary.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={subsidiary.image}
                      alt={subsidiary.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{subsidiary.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {subsidiary.name}
                      </h3>
                      <span className="text-sm text-gray-500">
                        Est. {subsidiary.established}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {subsidiary.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <UsersIcon className="w-4 h-4 text-teal-600" />
                        <span className="text-gray-600">{subsidiary.students} Students</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <AwardIcon className="w-4 h-4 text-teal-600" />
                        <span className="text-gray-600">{subsidiary.programs} Programs</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {subsidiary.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="px-3 py-1 bg-teal-100 text-teal-700 text-xs rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Collaborative Excellence
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our network of institutions works together to provide comprehensive
                educational pathways. Students can transfer credits, access resources
                across campuses, and benefit from our collective expertise.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full" />
                  <span className="text-gray-700">Cross-institutional credit transfer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full" />
                  <span className="text-gray-700">Shared resources and facilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full" />
                  <span className="text-gray-700">Joint research opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full" />
                  <span className="text-gray-700">Unified alumni network</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Global Reach</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Sri Lanka Campuses</span>
                    <span className="font-bold">5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Online Programs</span>
                    <span className="font-bold">Global</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Partner Universities</span>
                    <span className="font-bold">12+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Countries Served</span>
                    <span className="font-bold">15+</span>
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
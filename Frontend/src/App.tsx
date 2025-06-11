import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { WhyUs } from "./pages/WhyUs/WhyUs";
import { Programs } from "./pages/Programs/Programs";
import { Register } from "./pages/Register/Register";
import { Subsidiaries } from "./pages/Subsidiaries/Subsidiaries";
import { StudentTestimonials } from "./pages/StudentTestimonials/StudentTestimonials";
import { CourseDetails } from "./pages/CourseDetails/CourseDetails";
import  CampusLife  from "./pages/CampusLife/CampusLife";

export const App = (): JSX.Element => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/subsidiaries" element={<Subsidiaries />} />
        <Route path="/testimonials" element={<StudentTestimonials />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/campus-life" element={<CampusLife />} />
      </Routes>
    </Layout>
  );
};
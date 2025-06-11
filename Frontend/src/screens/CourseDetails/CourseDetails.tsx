import { AwardIcon, CalendarIcon, ClockIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { CourseOverviewSection } from "./sections/CourseOverviewSection";
import { EntryRequirementsSection } from "./sections/EntryRequirementsSection";
import { FooterSection } from "./sections/FooterSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";

export const CourseDetails = (): JSX.Element => {
  // Course features data
  const courseFeatures = [
    {
      icon: <CalendarIcon className="w-[17px] h-[17px]" />,
      text: "6 Months Duration",
    },
    {
      icon: (
        <img
          className="w-4 h-[17px]"
          alt="Location on"
          src="/location-on.svg"
        />
      ),
      text: "100% Online",
    },
    { icon: <ClockIcon className="w-5 h-5" />, text: "Flexible Schedule" },
    {
      icon: <AwardIcon className="w-[17px] h-[17px]" />,
      text: "Certified Program",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1411px] relative">
        {/* Navigation Bar */}
        <NavigationBarSection />

        {/* Hero Section */}
        <section className="w-full relative bg-teal-600 py-24">
          <div className="container px-6 md:px-24">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="md:w-1/2">
                <h1 className="font-bold text-white text-5xl tracking-[-1.44px] leading-[57.6px] mb-4">
                  Diploma in HR Management
                </h1>
                <p className="font-medium text-[#fcfcfc] text-base tracking-[0.16px] leading-[22.4px] mb-8 max-w-[610px]">
                  Master the fundamentals of Human Resources with our
                  comprehensive 6-month professional diploma program designed
                  for career advancement.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8">
                  {courseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {feature.icon}
                      <span className="font-normal text-white text-xs leading-[14.4px]">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <Button className="bg-white text-[#218838] font-heading text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] rounded-[11px] h-[55px] px-4">
                  Apply Now
                </Button>
              </div>

              <Card className="md:w-[439px] h-[340px] bg-teal-600 border-none rounded-[15px] shadow-[0px_4px_4px_#00000012]">
                <CardContent className="flex flex-col items-center justify-center h-full p-6">
                  <div className="w-[82px] h-[82px] bg-[#d9d9d92e] rounded-[41px] flex items-center justify-center mb-8">
                    <img className="w-12 h-12" alt="Award" src="/award.svg" />
                  </div>
                  <h2 className="font-bold text-white text-2xl tracking-[0] leading-[28.8px] text-center">
                    Professional
                  </h2>
                  <h3 className="font-bold text-[#fcfcfcab] text-[32px] tracking-[0] leading-[38.4px] text-center mb-5">
                    Certificate
                  </h3>
                  <p className="font-normal text-white text-base text-center tracking-[0] leading-[19.2px]">
                    Earn a recognized diploma that enhances your career
                    prospects in HR
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Course Overview Section */}
        <CourseOverviewSection />

        <div className="container px-6 md:px-24 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            {/* This div is intentionally left empty to maintain layout */}
          </div>
          <div className="md:w-1/2">
            <img
              className="w-full max-w-[596px] h-auto object-cover"
              alt="Students collaborating"
              src="/image-16.png"
            />
          </div>
        </div>

        {/* Entry Requirements Section */}
        <section className="container px-6 md:px-24 py-16 text-center">
          <h2 className="font-bold text-[#68c48a] text-5xl tracking-[-1.44px] leading-[57.6px] mb-4">
            Entry Requirements
          </h2>
          <p className="font-normal text-black text-base tracking-[-0.48px] leading-[19.2px] mb-8">
            Our program is designed to be accessible to both beginners and
            working professionals
          </p>
          <EntryRequirementsSection />
        </section>

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
};

import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CourseOverviewSection = (): JSX.Element => {
  // Course benefits data
  const courseBenefits = [
    "Learn from industry experts with real-world experience",
    "Gain practical skills through case studies and projects",
    "Build a strong foundation for HR career advancement",
    "Access to exclusive HR resources and networking opportunities",
  ];

  // Career opportunities data
  const careerOpportunities = [
    "HR Assistant",
    "HR Executive",
    "Human Resources Manager",
    "Talent Acquisition Specialist",
    "Training and Development Specialist",
  ];

  return (
    <section className="w-full max-w-[640px] my-8">
      <h2 className="text-5xl font-bold text-[#68c48a] tracking-[-1.44px] leading-[57.6px] font-['Inter',Helvetica] mb-6">
        Course Overview
      </h2>

      <div className="font-['Inter',Helvetica] font-normal text-black text-base tracking-[0.32px] leading-[26.1px] mb-8">
        Our Diploma in HR Management is designed to provide you with
        comprehensive knowledge and practical skills in human resource
        management. This program covers all essential areas of HR including
        recruitment, employee relations, performance management, and strategic
        HR planning.
      </div>

      <div className="space-y-4 mb-8">
        {courseBenefits.map((benefit, index) => (
          <div key={index} className="flex items-start">
            <div className="w-2 h-2 mt-2 bg-[#68c48a] rounded flex-shrink-0" />
            <div className="ml-4 font-['Inter',Helvetica] font-normal text-black text-sm tracking-[0.28px] leading-[22.8px]">
              {benefit}
            </div>
          </div>
        ))}
      </div>

      <Card className="border-none shadow-none">
        <CardContent className="p-0">
          <div className="font-['Inter',Helvetica] font-medium text-black text-base tracking-[0.32px] leading-[26.1px] mb-4">
            Career Opportunities
          </div>

          <div className="space-y-4">
            {careerOpportunities.map((career, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 mt-2 bg-[#68c48a] rounded flex-shrink-0" />
                <div className="ml-4 font-['Inter',Helvetica] font-normal text-black text-sm tracking-[0.28px] leading-[22.8px]">
                  {career}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

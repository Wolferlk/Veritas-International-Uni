import {
  BriefcaseIcon,
  CheckCircleIcon,
  PenToolIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Data for requirement cards
const basicRequirements = [
  {
    id: 1,
    title: "Educational Background",
    description: "Minimum high school diploma or equivalent qualification",
    icon: <PenToolIcon className="w-[25px] h-[25px]" />,
  },
  {
    id: 2,
    title: "Age Requirement",
    description: "Must be 18 years or older at the time of enrollment",
    icon: <UserIcon className="w-[25px] h-[25px]" />,
  },
  {
    id: 3,
    title: "Work Experience",
    description:
      "No prior HR experience required - suitable for beginners and professionals",
    icon: <BriefcaseIcon className="w-[25px] h-[25px]" />,
  },
];

// Data for skills and preparation
const skillsPreparation = [
  "Basic computer literacy and internet access",
  "Good written and verbal communication skills",
  "Motivation to learn and develop HR skills",
  "Ability to commit 10-15 hours per week for study",
  "Access to a computer/laptop for online learning",
];

export const EntryRequirementsSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1142px] mx-auto my-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="font-semibold text-2xl mb-6">Basic Requirements</h2>
          <div className="flex flex-col gap-6">
            {basicRequirements.map((requirement) => (
              <div
                key={requirement.id}
                className="bg-[#d2ffdd] rounded-[20px] shadow-[0px_4px_30px_#00000017]"
              >
                <Card className="ml-[5px] rounded-[20px] shadow-drop-shadow-100 border-0">
                  <CardContent className="p-0">
                    <div className="flex items-center p-6">
                      <div className="w-[42px] h-[42px] bg-[#d2ffdd] rounded-[15px] flex items-center justify-center mr-[11px] flex-shrink-0">
                        {requirement.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#218838] tracking-[-0.60px] leading-[24px]">
                          {requirement.title}
                        </h3>
                        <p className="font-normal text-sm leading-[23.8px] mt-[13px]">
                          {requirement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-2xl mb-6">
            Skills &amp; Preparation
          </h2>
          <Card className="bg-[#fcfcfc] rounded-[20px] shadow-drop-shadow-100 border-0">
            <CardContent className="p-5">
              <ul className="space-y-[30px]">
                {skillsPreparation.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-[22px] h-[22px] mr-[11px] flex-shrink-0" />
                    <span className="text-xs leading-[14.4px] mt-1">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

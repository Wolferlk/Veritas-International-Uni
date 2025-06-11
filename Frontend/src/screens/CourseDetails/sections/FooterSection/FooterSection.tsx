import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/separator";

// Navigation links data
const navigationLinks = [
  { title: "Home", weight: "medium" },
  { title: "About Us", weight: "normal" },
  { title: "Programs", weight: "medium" },
  { title: "Register", weight: "medium" },
  { title: "Contact Us", weight: "medium" },
  { title: "Why Us", weight: "medium" },
];

const secondColumnLinks = [
  { title: "Campus Life", weight: "medium" },
  { title: "Our Team", weight: "medium" },
  { title: "Partners", weight: "medium" },
  { title: "Store", weight: "medium" },
];

// Social media icons data
const socialIcons = [
  { icon: <FacebookIcon size={20} />, alt: "Facebook" },
  { icon: <TwitterIcon size={20} />, alt: "Twitter" },
  { icon: <InstagramIcon size={20} />, alt: "Instagram" },
  {
    icon: (
      <div className="w-[22px] h-[23.22px] bg-[url(/frame.svg)] bg-[100%_100%]" />
    ),
    alt: "LinkedIn",
  },
  { icon: <YoutubeIcon size={20} />, alt: "Youtube" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full h-[421px] relative">
      <div className="relative h-[421px]">
        <div className="w-full h-[421px]">
          <div className="h-[421px]">
            <div className="relative w-full h-[421px] bg-[url(/vector.png)] bg-[100%_100%]">
              {/* Navigation Section */}
              <div className="absolute top-[34px] left-[636px] [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(218,200,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Archivo',Helvetica] font-medium text-transparent text-[28px] tracking-[0] leading-[55px] whitespace-nowrap">
                Navigation
              </div>

              {/* First Navigation Column */}
              <div className="flex flex-col items-start gap-4 absolute top-[98px] left-[636px]">
                {navigationLinks.map((link, index) => (
                  <div
                    key={index}
                    className={`relative w-fit ${index === 0 ? "mt-[-0.87px]" : ""} rotate-[-0.33deg] opacity-80 [font-family:'Archivo',Helvetica] font-${link.weight} text-white text-base tracking-[0] leading-[26px] whitespace-nowrap`}
                  >
                    {link.title}
                  </div>
                ))}
              </div>

              {/* Second Navigation Column */}
              <div className="flex flex-col items-start gap-4 absolute top-[98px] left-[724px]">
                {secondColumnLinks.map((link, index) => (
                  <div
                    key={index}
                    className={`relative w-fit ${index === 0 ? "mt-[-0.74px]" : ""} rotate-[-0.33deg] opacity-80 [font-family:'Archivo',Helvetica] font-${link.weight} text-white text-base tracking-[0] leading-[26px] whitespace-nowrap`}
                  >
                    {link.title}
                  </div>
                ))}
              </div>

              {/* Maps Location Section */}
              <div className="flex flex-col items-start gap-2 absolute top-[41px] left-[1036px]">
                <div className="relative w-fit mt-[-1.00px] [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(218,200,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Archivo',Helvetica] font-medium text-transparent text-[28px] tracking-[0] leading-[55px] whitespace-nowrap">
                  Maps location
                </div>
                <div className="relative w-[258px] h-[214px] bg-[url(/image-3.png)] bg-cover bg-[50%_50%]" />
              </div>

              {/* Contact Info Section */}
              <div className="flex flex-col items-start gap-2 absolute top-[41px] left-[82px]">
                <div className="relative w-fit mt-[-1.00px] [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(218,200,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Archivo',Helvetica] font-medium text-transparent text-[28px] tracking-[0] leading-[55px] whitespace-nowrap">
                  Contact Info
                </div>

                <div className="flex flex-col items-start gap-4 relative flex-[0_0_auto] opacity-80">
                  <div className="relative w-[283.83px] mt-[-0.18px] rotate-[-0.33deg] [font-family:'Archivo',Helvetica] font-medium text-white text-base tracking-[0] leading-[26px]">
                    {" "}
                    Location: Panadura, Sri Lanka
                  </div>

                  <div className="relative w-fit rotate-[-0.33deg] [font-family:'Archivo',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px]">
                    <span className="font-medium">
                      Telephone : +94 77 789 7901 <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+94
                      77 479 5371
                    </span>
                  </div>

                  <div className="relative w-fit rotate-[-0.33deg] [font-family:'Archivo',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] whitespace-nowrap">
                    <span className="font-medium">Email :</span>
                    <a
                      href="mailto:info.veritascampus@gmail.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="font-medium underline">
                        info.veritascampus@gmail.com
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer Bottom Section */}
              <div className="absolute w-[330px] h-[51px] top-[363px] left-[551px]">
                <div className="absolute top-5 left-0 [font-family:'Archivo',Helvetica] font-medium text-ffffff text-[13px] tracking-[0] leading-[31px] whitespace-nowrap">
                  © 2025 Veritas International Campus. All rights reserved.
                </div>

                <div className="inline-flex items-center gap-2.5 absolute top-0 left-[91px]">
                  {socialIcons.map((social, index) => (
                    <div
                      key={index}
                      className="relative flex-[0_0_auto] text-white"
                    >
                      {social.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="absolute w-[1394px] h-px top-[345px] left-1.5 bg-[url(/line-1.svg)] bg-cover bg-[50%_50%]" />
      </div>
    </footer>
  );
};

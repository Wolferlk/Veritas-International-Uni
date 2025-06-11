import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

// Navigation menu items data
const navigationItems = [
  { name: "Home", href: "#" },
  { name: "Why Us", href: "#" },
  { name: "Programs", href: "#" },
  { name: "Register", href: "#" },
  { name: "Subsidiaries", href: "#" },
  { name: "Student Testimonials", href: "#" },
];

export const NavigationBarSection = (): JSX.Element => {
  return (
    <header className="w-full py-3.5 px-16">
      <div className="flex items-center justify-between">
        {/* Logo and University Name */}
        <div className="flex items-center">
          <img
            className="w-[57px] h-[61px] object-cover"
            alt="Veritas International Campus Logo"
            src="/screenshot-2025-05-26-133545-1.png"
          />
          <div className="ml-[8px]">
            <h1 className="font-heading font-[number:var(--heading-font-weight)] text-black text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)]">
              Veritas International Campus
            </h1>
            <p className="font-body-base font-[number:var(--body-base-font-weight)] text-black text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)]">
              Shaping Tomorrow&#39;s Leaders Today
            </p>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    href={item.href}
                    className="font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-[#1e1e1e] text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)]"
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Apply Now Button */}
          <Button className="ml-6 bg-[#28a745] text-grayswhite rounded-[11px] px-[15px] py-3 font-heading font-[number:var(--heading-font-weight)] text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] [font-style:var(--heading-font-style)]">
            Apply Now
          </Button>
        </div>
      </div>
    </header>
  );
};

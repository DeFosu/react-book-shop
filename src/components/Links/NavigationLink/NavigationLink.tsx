import React from "react";
import { LinkProps } from "..";

const NavigationLink: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-septenary hover:text-accent transition-colors duration-150 font-inter text-lg leading-6 tracking-wide"
    >
      {children}
    </a>
  );
};

export default NavigationLink;

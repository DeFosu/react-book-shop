import React from "react";
import { LinkProps } from "..";

const NavigationLink: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-septenary hover:text-accent transition-colors duration-150"
    >
      {children}
    </a>
  );
};

export default NavigationLink;

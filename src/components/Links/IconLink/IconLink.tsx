import React from "react";
import { LinkProps } from "..";

const IconLink: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <div className="w-11 h-11 bg-white">
      <a href={href} className="w-full h-full flex items-center justify-center">
        {children}
      </a>
    </div>
  );
};

export default IconLink;

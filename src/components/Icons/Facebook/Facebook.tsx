import React from "react";
import { IconProps } from "..";

const Facebook: React.FC<IconProps> = ({
  className = "",
  width = 9,
  height = 15,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1_13)">
        <path
          d="M7.75391 8.625L8.13672 6.10938H5.70312V4.46875C5.70312 3.75781 6.03125 3.10156 7.125 3.10156H8.24609V0.941406C8.24609 0.941406 7.23438 0.75 6.27734 0.75C4.28125 0.75 2.96875 1.98047 2.96875 4.16797V6.10938H0.726562V8.625H2.96875V14.75H5.70312V8.625H7.75391Z"
          fill="#141414"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_13">
          <rect width="9" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Facebook;

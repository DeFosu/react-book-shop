import React from "react";
import { IconProps } from "..";

const LinkedIn: React.FC<IconProps> = ({
  className = "",
  width = 13,
  height = 13,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1_21)">
        <path
          d="M3.10938 13V4.82422H0.566406V13H3.10938ZM1.82422 3.73047C2.64453 3.73047 3.30078 3.04688 3.30078 2.22656C3.30078 1.43359 2.64453 0.777344 1.82422 0.777344C1.03125 0.777344 0.375 1.43359 0.375 2.22656C0.375 3.04688 1.03125 3.73047 1.82422 3.73047ZM12.5977 13H12.625V8.51562C12.625 6.32812 12.1328 4.63281 9.5625 4.63281C8.33203 4.63281 7.51172 5.31641 7.15625 5.94531H7.12891V4.82422H4.69531V13H7.23828V8.95312C7.23828 7.88672 7.42969 6.875 8.74219 6.875C10.0547 6.875 10.082 8.07812 10.082 9.03516V13H12.5977Z"
          fill="#141414"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_21">
          <rect width="13" height="13" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LinkedIn;

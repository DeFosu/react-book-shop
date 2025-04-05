import React from "react";
import { Typography } from "../Typography";
import { Divider } from "../Devider";

interface SectionHeaderProps {
  title: string;
  align?: "left" | "center" | "right";
  showDivider?: boolean;
  dividerWidth?: string;
  dividerHeight?: string;
  titleVariant?: "h1" | "h2" | "h3" | "h4" | "h5";
  titleColor?: "primary" | "secondary" | "white";
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  align = "center",
  showDivider = true,
  dividerWidth = "50px",
  dividerHeight = "3px",
  titleVariant = "h2",
  titleColor = "primary",
  className = "",
}) => {
  const alignmentClasses = {
    left: "items-start",
    center: "items-center",
    right: "items-end",
  };

  return (
    <div
      className={`flex flex-col gap-6 ${alignmentClasses[align]} ${className}`}
    >
      <Typography
        variant={titleVariant}
        color={titleColor}
        font="cardo"
        className="text-[42px] leading-[50px]"
      >
        {title}
      </Typography>
      {showDivider && <Divider width={dividerWidth} height={dividerHeight} />}
    </div>
  );
};

export default SectionHeader;

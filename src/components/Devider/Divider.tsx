import React from "react";

interface DividerProps {
  width?: string;
  height?: string;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({
  width = "36px",
  height = "2px",
  className = "",
}) => {
  return (
    <div
      style={{ width, height }}
      className={`bg-accent inline-block ${className}`}
    />
  );
};

export default Divider;

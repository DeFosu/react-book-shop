import React from "react";

interface CircleProps {
  diameter?: number;
  children?: React.ReactNode;
  className?: string;
}

const Circle: React.FC<CircleProps> = ({
  diameter = 16,
  children,
  className = "",
}) => {
  return (
    <div
      className={`rounded-full flex items-center justify-center bg-accent ${className}`}
      style={{
        width: `${diameter}px`,
        height: `${diameter}px`,
      }}
    >
      {children}
    </div>
  );
};

export default Circle;

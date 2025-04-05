import { type ReactNode } from "react";

type ButtonVariant = "outlined" | "filled" | "text";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isIcon?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-13 py-4 text-lg",
  lg: "px-23 py-6 text-lg",
};

const variantClasses = {
  outlined:
    "border-2 border-accent text-primary hover:bg-accent/10  tracking-wide",
  filled: "bg-accent text-primary hover:bg-accent/90 tracking-wider",
  text: "text-white tracking-wider",
};

const Button = ({
  children,
  variant = "filled",
  size = "md",
  isIcon = false,
  className = "",
  onClick,
  disabled = false,
}: ButtonProps) => {
  const baseClasses = `font-cardo font-medium transition-colors duration-200 cursor-pointer 
    focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 
    disabled:opacity-50 disabled:cursor-not-allowed `;

  const iconClasses = isIcon ? "p-2 aspect-square" : "";

  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${iconClasses}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {variant === "text" ? (
        <div className="relative">
          {children}

          <div className="w-full h-px bg-white absolute bottom-0 left-0" />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;

import React from "react";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
  disabled = false,
}) => {
  const baseStyles =
    "py-3 px-4 rounded-lg shadow-md transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "border border-transparent text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:ring-orange-500",
    secondary:
      "border border-orange-200 text-orange-600 bg-white hover:bg-orange-50 focus:ring-orange-500",
    text: "text-orange-600 hover:text-orange-700 shadow-none hover:bg-orange-50/50",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

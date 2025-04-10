import React from "react";

const Card = ({
  children,
  className = "",
  onClick,
  hover = true,
  blur = true,
}) => {
  const baseStyles =
    "bg-gradient-to-br from-white/80 to-white/60 rounded-2xl shadow-xl p-8 relative z-10 border border-white/20";
  const hoverStyles = hover
    ? "hover:shadow-2xl hover:bg-white/80 transition-all duration-300"
    : "";
  const blurStyles = blur ? "backdrop-blur-sm" : "";

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${blurStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;

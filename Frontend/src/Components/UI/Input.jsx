import React from "react";

const Input = ({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder = " ",
  label,
  required = false,
  className = "",
  error = "",
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`peer w-full px-4 py-3 bg-white/50 border ${
          error ? "border-red-300" : "border-gray-200"
        } rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
          error ? "focus:ring-red-500" : "focus:ring-orange-500"
        } focus:border-transparent transition-all duration-200 hover:bg-white/70 placeholder-transparent ${className}`}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 -top-2.5 bg-white/70 px-1 text-sm font-light ${
          error ? "text-red-600" : "text-gray-600"
        } transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm ${
          error ? "peer-focus:text-red-600" : "peer-focus:text-orange-600"
        }`}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;

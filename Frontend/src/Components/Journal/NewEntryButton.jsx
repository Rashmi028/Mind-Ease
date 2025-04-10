import React from "react";

const NewEntryButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl hover:scale-110 transition-all duration-300"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 4v16m8-8H4"
      />
    </svg>
  </button>
);

export default NewEntryButton;

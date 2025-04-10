import React from "react";

const JournalEntry = ({ entry }) => (
  <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-4">
        <div
          className={`w-4 h-4 rounded-full ring-4 ring-opacity-30 ${
            entry.mood === "happy"
              ? "bg-green-400 ring-green-200"
              : entry.mood === "neutral"
              ? "bg-yellow-400 ring-yellow-200"
              : "bg-red-400 ring-red-200"
          }`}
        />
        <span className="text-sm text-gray-500 font-light tracking-wide">
          {entry.date}
        </span>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <h3 className="text-xl font-light text-gray-800 mb-3 tracking-wide">
      {entry.title}
    </h3>
    <p className="text-gray-600 text-sm font-light leading-relaxed line-clamp-3">
      {entry.content}
    </p>
    <div className="mt-6 flex items-center space-x-2 flex-wrap gap-2">
      {entry.tags.map((tag, index) => (
        <span
          key={index}
          className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 font-light tracking-wide ring-1 ring-orange-100"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default JournalEntry;

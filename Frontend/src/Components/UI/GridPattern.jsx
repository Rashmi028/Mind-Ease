import React from "react";

const GridPattern = ({ className = "" }) => (
  <div className={`absolute inset-0 z-0 opacity-5 ${className}`}>
    <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMiAyaDJ2MkgyeiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9nPjwvc3ZnPg==')]"></div>
  </div>
);

export default GridPattern;

import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ name, path, icon, isActive }) => (
  <Link
    to={path}
    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-orange-50 text-orange-600"
        : "text-gray-600 hover:bg-orange-50/50 hover:text-orange-600"
    }`}
  >
    {icon}
    <span className="font-light tracking-wide">{name}</span>
  </Link>
);

const UserProfile = ({ user }) => (
  <div className="flex items-center space-x-4 pb-4 border-b border-white/20">
    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
      <span className="text-white font-light text-xl">{user.name[0]}</span>
    </div>
    <div>
      <h3 className="font-light text-gray-800 text-lg tracking-wide">
        {user.name}
      </h3>
      <p className="text-xs text-gray-500 font-light tracking-wide">
        {user.email}
      </p>
    </div>
  </div>
);

const Sidebar = ({ user, onLogout }) => {
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();

  const navItems = [
    {
      name: "Dashboard",
      path: "overview",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
    },
    {
      name: "Journal",
      path: "journal",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
    },
    {
      name: "Meditations",
      path: "meditations",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "AI Therapist",
      path: "therapist",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      ),
    },
    {
      name: "Mood Tracker",
      path: "mood-tracker",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "Community",
      path: "community",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed top-0 left-0 h-full w-64 bg-white/5 backdrop-blur-lg shadow-xl p-6 space-y-8 transition-all duration-300">
      <UserProfile user={user} />
      <div className="space-y-2">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            {...item}
            isActive={currentPath === item.path}
          />
        ))}
      </div>
      <button
        onClick={onLogout}
        className="mt-auto flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-orange-50/50 hover:text-orange-600 transition-all duration-200"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        <span className="font-light tracking-wide">Logout</span>
      </button>
    </nav>
  );
};

export default Sidebar;

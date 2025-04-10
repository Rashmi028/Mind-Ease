import React from "react";
import { useNavigate } from "react-router-dom";

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm font-light">{title}</p>
        <h3 className="text-2xl font-light text-gray-800 mt-1">{value}</h3>
      </div>
      <div className="text-orange-500">{icon}</div>
    </div>
  </div>
);


const QuickAction = ({ title, description, icon, onClick }) => (
  <button
    onClick={onClick}
    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 text-left w-full hover:bg-orange-50/50"
  >
    <div className="flex items-start space-x-4">
      <div className="text-orange-500">{icon}</div>
      <div>
        <h3 className="text-gray-800 font-light">{title}</h3>
        <p className="text-sm text-gray-500 font-light mt-1">{description}</p>
      </div>
    </div>
  </button>
);

const Overview = () => {
  const navigate = useNavigate();

  const handleJournalClick = () => {
    navigate("/dashboard/journal"); // replace with your actual journal route
  };

  const handleMeditationClick = () => {
    navigate("/dashboard/meditations"); // replace with your actual meditation route
  };

  const handleTherapistClick = () => {
    navigate("/dashboard/therapist"); // replace with your actual therapist route
  };
  const stats = [
    {
      title: "Journal Entries",
      value: "28",
      icon: (
        <svg
          className="w-6 h-6"
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
      title: "Meditation Minutes",
      value: "120",
      icon: (
        <svg
          className="w-6 h-6"
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
      title: "Mood Score",
      value: "8.5",
      icon: (
        <svg
          className="w-6 h-6"
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
  ];

  const quickActions = [
    {
      title: "Write in Journal",
      description: "Record your thoughts and feelings",
      icon: (
        <svg
          className="w-6 h-6"
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
      onClick: handleJournalClick,
    },
    {
      title: "Start Meditation",
      description: "Begin a guided meditation session",
      icon: (
        <svg
          className="w-6 h-6"
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
      onClick: handleMeditationClick,
    },
    {
      title: "Talk to AI Therapist",
      description: "Get support and guidance",
      icon: (
        <svg
          className="w-6 h-6"
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
      onClick:handleTherapistClick,
    },
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-light text-gray-800">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <h2 className="text-2xl font-light text-gray-800 mt-8">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActions.map((action, index) => (
          <QuickAction key={index} {...action} />
        ))}
      </div>
    </div>
  );
};

export default Overview;

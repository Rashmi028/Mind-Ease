import { useState } from "react";

const MeditationCard = ({ meditation, onPlay }) => (
  <div
    className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
    onClick={() => onPlay(meditation)}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-light text-gray-800 tracking-wide">
            {meditation.title}
          </h3>
          <p className="text-sm text-gray-600 font-light">
            {meditation.duration} minutes
          </p>
        </div>
      </div>
      <span className="text-sm text-orange-600 font-light">
        {meditation.category}
      </span>
    </div>
    <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">
      {meditation.description}
    </p>
    <div className="flex items-center justify-between">
      <span className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 font-light tracking-wide ring-1 ring-orange-100">
        {meditation.level}
      </span>
      <span className="text-sm text-gray-500 font-light">
        {meditation.plays} plays
      </span>
    </div>
  </div>
);

export default function Meditations() {
  const [meditations] = useState([
    {
      id: 1,
      title: "Morning Mindfulness",
      duration: 10,
      category: "Mindfulness",
      description:
        "Start your day with a peaceful mindfulness meditation to center yourself and set positive intentions.",
      level: "Beginner",
      plays: 1234,
      videoUrl: "https://www.youtube.com/embed/ZToicYcHIOU"
    },
    {
      id: 2,
      title: "Stress Relief",
      duration: 15,
      category: "Relaxation",
      description:
        "Release tension and find calm with this guided meditation designed to reduce stress and anxiety.",
      level: "Intermediate",
      plays: 2345,
      videoUrl: "https://www.youtube.com/embed/ZToicYcHIOU"
    },
    {
      id: 3,
      title: "Deep Sleep",
      duration: 20,
      category: "Sleep",
      description:
        "Drift into peaceful sleep with this calming meditation designed to help you relax and let go of the day.",
      level: "All Levels",
      plays: 3456,
      videoUrl: "https://www.youtube.com/embed/ZToicYcHIOU"
    },
    {
      id: 4,
      title: "Focus & Clarity",
      duration: 12,
      category: "Concentration",
      description:
        "Enhance your concentration and mental clarity with this meditation focused on building attention.",
      level: "Advanced",
      plays: 1789,
      videoUrl: "https://www.youtube.com/embed/ZToicYcHIOU"
    }
  ]);

  const [selectedMeditation, setSelectedMeditation] = useState(null);

  const handlePlay = (meditation) => {
    setSelectedMeditation(meditation);
  };

  const closePlayer = () => setSelectedMeditation(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-6xl mx-auto space-y-8 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">
            Guided Meditations
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search meditations..."
              className="px-6 py-3 bg-white/40 border-none rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-200 hover:bg-white/50 pl-12 text-gray-700 font-light tracking-wide placeholder:text-gray-400/80"
            />
            <svg
              className="w-5 h-5 text-gray-400/80 absolute left-4 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {meditations.map((meditation) => (
            <MeditationCard
              key={meditation.id}
              meditation={meditation}
              onPlay={handlePlay}
            />
          ))}
        </div>
      </div>

      {selectedMeditation && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 shadow-xl max-w-2xl w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
              onClick={closePlayer}
            >
              &times;
            </button>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={selectedMeditation.videoUrl}
                title={selectedMeditation.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h2 className="text-xl mt-4 text-gray-800 font-semibold">
              {selectedMeditation.title}
            </h2>
            <p className="text-sm text-gray-600 mt-1">{selectedMeditation.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
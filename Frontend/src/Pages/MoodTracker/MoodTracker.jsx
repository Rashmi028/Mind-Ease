import { useEffect, useState } from "react";
import MoodPopup from "./MoodPopup";
import axios from "axios";

const MoodCalendar = ({ userId, onDateClick }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/moodRoutes/${userId}`);
        setEntries(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEntries();
  }, [userId]);

  const moodColorMap = {
    "Very Happy": "bg-green-500",
    Happy: "bg-green-400",
    Neutral: "bg-yellow-400",
    Sad: "bg-orange-400",
    "Very Sad": "bg-red-500",
  };

  const today = new Date();

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-7 gap-2">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
        <div key={day} className="text-center text-sm text-gray-600 font-light py-2">
          {day}
        </div>
      ))}
      {days.map((day) => {
        const match = entries.find((entry) => {
          const entryDate = new Date(entry.date);
          return (
            entryDate.getDate() === day &&
            entryDate.getMonth() === today.getMonth() &&
            entryDate.getFullYear() === today.getFullYear()
          );
        });

        const color = match ? moodColorMap[match.mood] : null;

        return (
          <div
            key={day}
            onClick={() => match && onDateClick(match)} // Trigger popup
            className="aspect-square rounded-lg bg-white/50 shadow-md flex items-center justify-center group hover:shadow-lg transition-all duration-200 cursor-pointer relative"
          >
            <span className="text-sm text-gray-700 font-light">{day}</span>
            {color && (
              <div
                className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${color} ring-2 ring-white`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const MoodStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        title: "Monthly Overview",
        value: "Positive",
        trend: "+15% from last month",
        color: "text-green-600",
      },
      {
        title: "Most Common Mood",
        value: "Happy",
        trend: "8 days this month",
        color: "text-orange-600",
      },
      {
        title: "Mood Streak",
        value: "5 Days",
        trend: "of positive moods",
        color: "text-blue-600",
      },
    ].map((stat, index) => (
      <div
        key={index}
        className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 group"
      >
        <h3 className="text-lg font-light text-gray-800 tracking-wide">
          {stat.title}
        </h3>
        <div
          className={`mt-3 text-4xl font-light ${stat.color} group-hover:scale-105 transition-transform duration-300`}
        >
          {stat.value}
        </div>
        <p className="mt-2 text-sm text-gray-600 font-light">{stat.trend}</p>
      </div>
    ))}
  </div>
);

const MoodEntry = ({ userId, onMoodSaved }) => {
  const moods = [
    { name: "Very Happy", emoji: "😊" },
    { name: "Happy", emoji: "🙂" },
    { name: "Neutral", emoji: "😐" },
    { name: "Sad", emoji: "😔" },
    { name: "Very Sad", emoji: "😢" },
  ];

  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());


  const saveMood = async () => {
    if (!selectedMood) return alert("Please select a mood");

    // const today = new Date().toISOString();
    const today = new Date().toISOString().split("T")[0]; // "2025-04-08"
    console.log({ userId, today, selectedDate, note });
    try {
      await axios.post("http://localhost:5000/moodRoutes/add", {
        userId,
        date: today,
        mood: selectedMood,
        note,
      });
    


      onMoodSaved(); // Refresh calendar
      setNote("");
      setSelectedMood(null);
    } catch (err) {
      console.error(err);
      alert("Error saving mood");
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6">
      <h3 className="text-xl font-light text-gray-800 mb-4">
        How are you feeling today?
      </h3>
      <div className="flex justify-between items-center mb-6">
        {moods.map((mood) => (
          <button
            key={mood.name}
            onClick={() => setSelectedMood(mood.name)}
            className={`flex flex-col items-center space-y-2 group ${
              selectedMood === mood.name ? "scale-110" : ""
            }`}
          >
            <span className="text-4xl">{mood.emoji}</span>
            <span className="text-sm text-gray-600 font-light">
              {mood.name}
            </span>
          </button>
        ))}
      </div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a note about your mood (optional)"
        className="w-full px-4 py-3 rounded-xl bg-white/50 border-none shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-200 hover:bg-white/60 text-gray-700 font-light"
        rows="3"
      />
      <button
        onClick={saveMood}
        className="mt-4 w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] font-light"
      >
        Save Entry
      </button>
    </div>
  );
};
export default function MoodTracker() {
  const userId = "67f0a811faf5c8b539590ba1";
  const [refreshKey, setRefreshKey] = useState(0);
  const [selectedEntry, setSelectedEntry] = useState(null); // for popup

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">Mood Tracker</h1>
        </div>

        <MoodStats />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-light text-gray-800 mb-6">
              Monthly View
            </h2>
            <MoodCalendar
              key={refreshKey}
              userId={userId}
              onDateClick={(entry) => setSelectedEntry(entry)}
            />
          </div>
          <div className="md:col-span-1">
            <MoodEntry
              userId={userId}
              onMoodSaved={() => setRefreshKey((prev) => prev + 1)}
            />
          </div>
        </div>
      </div>

      {/* Show Popup if entry is selected */}
      <MoodPopup
        isOpen={!!selectedEntry}
        onClose={() => setSelectedEntry(null)}
        entry={selectedEntry}
      />
    </div>
  );
}
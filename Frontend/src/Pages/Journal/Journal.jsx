import { useEffect, useState } from "react";
import axios from "axios";

const JournalEntry = ({ entry, onDelete }) => (
  <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div
          className={`h-10 w-10 rounded-xl ${
            entry.mood === "happy"
              ? "bg-green-400"
              : entry.mood === "neutral"
              ? "bg-yellow-400"
              : "bg-red-400"
          } flex items-center justify-center shadow-lg`}
        >
          <span className="text-white text-xl">
            {entry.mood === "happy"
              ? "😊"
              : entry.mood === "neutral"
              ? "😐"
              : "😔"}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-light text-gray-800 tracking-wide">
            {entry.title}
          </h3>
          <p className="text-sm text-gray-600 font-light">{entry.date}</p>
        </div>
      </div>
      <button
        onClick={() => onDelete(entry._id)}
        className="text-gray-400 hover:text-red-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
      >
        🗑️
      </button>
    </div>
    <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">
      {entry.content}
    </p>
    <div className="flex flex-wrap gap-2">
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

export default function Journal() {
  const [entries, setEntries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newEntry, setNewEntry] = useState({
    title: "",
    content: "",
    date: new Date().toLocaleDateString(),
    mood: "neutral",
    tags: [],
  });

  useEffect(() => {
    axios.get("http://localhost:5000/journal/entries").then((response) => {
      setEntries(response.data);
    });
  }, []);

  const deleteEntry = (id) => {
    axios.delete(`http://localhost:5000/journal/entries/${id}`).then(() => {
      setEntries(entries.filter((entry) => entry._id !== id));
    });
  };

  const addEntry = () => {
    if (!newEntry.title || !newEntry.content) return;

    axios.post("http://localhost:5000/journal/entries", newEntry).then((response) => {
      setEntries([...entries, response.data]);
      setShowModal(false);
      setNewEntry({ title: "", content: "", date: new Date().toLocaleDateString(), mood: "neutral", tags: [] });
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">Journal</h1>

        {/* Grid of Journal Entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {entries.map((entry) => (
            <JournalEntry key={entry._id} entry={entry} onDelete={deleteEntry} />
          ))}
        </div>

        {/* Add Button */}
        <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl hover:scale-110 transition-all duration-300"
        >
          +
        </button>

        {/* Add Entry Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-xl w-96">
              <h2 className="text-xl font-semibold mb-4">New Journal Entry</h2>

              <input
                type="text"
                placeholder="Title"
                className="w-full p-2 mb-3 border rounded"
                value={newEntry.title}
                onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
              />

              <textarea
                placeholder="Write your thoughts..."
                className="w-full p-2 mb-3 border rounded"
                rows="4"
                value={newEntry.content}
                onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
              />

              <select
                className="w-full p-2 mb-3 border rounded"
                value={newEntry.mood}
                onChange={(e) => setNewEntry({ ...newEntry, mood: e.target.value })}
              >
                <option value="happy">😊 Happy</option>
                <option value="neutral">😐 Neutral</option>
                <option value="sad">😔 Sad</option>
              </select>

              <input
                type="text"
                placeholder="Tags (comma separated)"
                className="w-full p-2 mb-3 border rounded"
                value={newEntry.tags.join(", ")}
                onChange={(e) => setNewEntry({ ...newEntry, tags: e.target.value.split(",").map(tag => tag.trim()) })}
              />

              <div className="flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={addEntry}
                  className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

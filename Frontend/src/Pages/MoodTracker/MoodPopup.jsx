// components/MoodPopup.jsx
const MoodPopup = ({ isOpen, onClose, entry }) => {
    if (!isOpen || !entry) return null;
    const formattedDate = new Date(entry.date).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  
    return (
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
        <div className="bg-white rounded-xl p-6 w-96 shadow-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
          >
            &times;
          </button>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Mood Details</h3>
          <p><strong>Date & Time:</strong> {formattedDate}</p>
          <p className="mb-2">
            <strong>Mood:</strong> {entry.mood}
          </p>
          <p className="mb-2">
            <strong>Note:</strong> {entry.note || "No note added."}
          </p>
        </div>
      </div>
    );
  };
  
  export default MoodPopup;
  
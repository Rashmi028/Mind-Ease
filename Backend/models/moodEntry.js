import mongoose from 'mongoose';

const moodEntrySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  date: { type: Date, required: true },
  mood: { 
    type: String, 
    enum: ['Very Happy', 'Happy', 'Neutral', 'Sad', 'Very Sad'],
    required: true 
  },
  note: { type: String }
}, { timestamps: true });

const MoodEntry = mongoose.model('MoodEntry', moodEntrySchema);
export default MoodEntry;

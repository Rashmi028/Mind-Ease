import express from 'express';
import MoodEntry from '../models/moodEntry.js';

const router = express.Router();

// Add a new mood entry
router.post('/add', async (req, res) => {
  try {
    const { userId, date, mood, note } = req.body;
    const newEntry = new MoodEntry({ userId, date, mood, note });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


const saveMood = async () => {
  try {
    await axios.post('/add', {
      userId,
      date: selectedDate, // <-- pass correct variable
      mood,
      note,
    });
  } catch (err) {
    console.error(err);
  }
};


// Get all entries for a user
router.get('/:userId', async (req, res) => {
  try {
    const entries = await MoodEntry.find({ userId: req.params.userId });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

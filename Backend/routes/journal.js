
import express from "express";
import Journal from "../models/Journal.js";
const router = express.Router();

// Get all journal entries
router.get("/entries", async (req, res) => {
    const entries = await Journal.find();
    res.json(entries);
  });
  
  // Add a new journal entry
  router.post("/entries", async (req, res) => {
    const newEntry = new Journal(req.body);
    await newEntry.save();
    res.json(newEntry);
  });
  
  // Delete an entry
  router.delete("/entries/:id", async (req, res) => {
    await Journal.findByIdAndDelete(req.params.id);
    res.json({ message: "Entry deleted" });
  });
  // Add a new journal entry
router.post("/entries", async (req, res) => {
    try {
      const newEntry = new Journal(req.body);
      await newEntry.save();
      res.status(201).json(newEntry);
    } catch (error) {
      res.status(500).json({ message: "Error adding entry" });
    }
  });
  

  export default router;

  
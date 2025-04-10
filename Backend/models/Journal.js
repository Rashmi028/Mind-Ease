import mongoose from "mongoose";

const JournalSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: String,
    mood: String,
    tags: [String],});

export default mongoose.model("Journal", JournalSchema);

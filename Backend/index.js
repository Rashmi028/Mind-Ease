import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import journalRoutes from "./routes/journal.js"
import moodRoutes from "./routes/moodRoutes.js"
import post from "./routes/posts.js"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.use("/auth", authRoutes);
app.use("/journal", journalRoutes);
app.use('/moodRoutes', moodRoutes);
app.use('/post',post)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

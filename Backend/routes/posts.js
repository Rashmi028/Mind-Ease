// routes/posts.js
import express from "express";
import Post from "../models/post.js";

const router = express.Router();
router.post("/create", async (req, res) => {
  try {
    const { content, author } = req.body;

    if (!content || !author) {
      return res.status(400).json({ message: "Content and author are required." });
    }

    const newPost = new Post({
      content,
      author,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * Route: GET /api/posts
 * Purpose: Fetch all community posts
 * Public Route
 */
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "name") // fetch only the user's name
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

export default router;
 

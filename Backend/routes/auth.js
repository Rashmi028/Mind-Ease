import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already in use" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login route
router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
      if (!existingUser)
        return res.status(401).json({ message: "User not found" });
  
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (!isMatch)
        return res.status(401).json({ message: "Invalid password" });
  
      // You can also return a token here
      res.status(200).json({ message: "Login successful", user: existingUser });
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  });

export default router;

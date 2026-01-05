import express from "express";
import Category from "../models/Categories.js";

const router = express.Router();

router.post("/categories", async (req, res) => {
    console.log("BODY:", req.body); // ← увидишь тело

  const { name } = req.body;

if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  const category = await Category.create({ name, slug });
  res.json(category);
});

export default router;

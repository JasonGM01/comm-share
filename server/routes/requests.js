const express = require("express");
const router = express.Router();
const Request = require("../models/request");

// GET all requests
router.get("/", async (req, res) => {
  try {
    const requests = await Request.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch requests" });
  }
});

// CREATE request
router.post("/create", async (req, res) => {
  try {
    const newRequest = await Request.create(req.body);
    res.status(201).json(newRequest);
  } catch (err) {
    res.status(400).json({ error: "Failed to create request" });
  }
});

module.exports = router;
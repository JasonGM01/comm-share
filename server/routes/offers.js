const express = require("express");
const router = express.Router();
const Offer = require("../models/offer");

// GET all offers
router.get("/", async (req, res) => {
  try {
    const offers = await Offer.find().sort({ createdAt: -1 });
    res.json(offers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch offers" });
  }
});

// GET one offer
router.get("/:id", async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);

    if (!offer) {
      return res.status(404).json({ error: "Offer not found" });
    }

    res.json(offer);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch offer" });
  }
});

// CREATE offer
router.post("/create", async (req, res) => {
  try {
    const newOffer = await Offer.create(req.body);
    res.status(201).json(newOffer);
  } catch (err) {
    res.status(400).json({ error: "Failed to create offer" });
  }
});

module.exports = router;
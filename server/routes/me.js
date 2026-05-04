const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).json({ message: "Not logged in" });
        }

        const user = await User.findById(req.session.userId).select("-password");

        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
})

module.exports = router;
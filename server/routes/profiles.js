const express = require("express");
const router = express.Router;
const User = require("../models/user");

router.get("./:id", async (req, res) => {
    try{
        const user = await User.findById(req.params.id).select("-password");

        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        res.json(user);
    } catch(err){
        res.status(500).json({message: "Server error"});
    }
});

router.put("/:id", async (req, res) => {
    try{
    const {image, name, about, categories} = req.body;

    const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {image, name, about, categories},
        {new: true}
    ).select("-password");

    res.json(updateUser);
    } catch(err){
        res.status(500).json({message: "Server error"});
    }
});

module.export = router;
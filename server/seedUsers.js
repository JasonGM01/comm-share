const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./models/user")

const sampleUsers = [
    {
        name: "Jason",
        about: "I like to fix cars",
        category: "Mechanic",
        email: "person1@example.com"
    },
    {
        name: "Jack",
        about: "I like fixing plumbing",
        category: "Plumbing",
        email: "person2@example.com"
    }
]

async function seed(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");

        await User.deleteMany({});
        await User.insertMany(sampleUsers);

        console.log("Seed data inserted");
        process.exit(0);
    } catch(err){
        console.error("Seeding error:", err);
        process.exit(1);
    }
}

seed();
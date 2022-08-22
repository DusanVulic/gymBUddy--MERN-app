const express = require("express");

//import model

const Workout = require("../models/workoutModel");

const router = express.Router();

//GET ALL WORKOUTS
router.get("/", (req, res) => {
    res.json({ msg: "get all workouts" });
});

//GET SINGLE WORKOUT
router.get("/:id", (req, res) => {
    res.json({ msg: "get single workout" });
});

//POST (create ) NEW WORKOUT
router.post("/", async(req, res) => {
    const { title, load, reps } = req.body;

    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

    //res.json({ msg: "post / create new workout" });
});

//DELETE WORKOUT
router.delete("/:id", (req, res) => {
    res.json({ msg: "delete a workout" });
});

//UPDATE  WORKOUT
router.patch("/:id", (req, res) => {
    res.json({ msg: "update workout" });
});

module.exports = router;
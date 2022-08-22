const express = require("express");

//import controllers

const {
    getAllWorkouts,
    getSingleWorkout,
    createWorkout,
} = require("../controllers/workoutController");

//import model

const Workout = require("../models/workoutModel");

const router = express.Router();

//GET ALL WORKOUTS
router.get("/", getAllWorkouts);

//GET SINGLE WORKOUT
router.get("/:id", getSingleWorkout);

//POST (create ) NEW WORKOUT
router.post("/", createWorkout);

//DELETE WORKOUT
router.delete("/:id", (req, res) => {
    res.json({ msg: "delete a workout" });
});

//UPDATE  WORKOUT
router.patch("/:id", (req, res) => {
    res.json({ msg: "update workout" });
});

module.exports = router;
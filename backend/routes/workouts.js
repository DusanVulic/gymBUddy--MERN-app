const express = require("express");

//import controllers

const {
    getAllWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout,
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
router.delete("/:id", deleteWorkout);

//UPDATE  WORKOUT
router.patch("/:id", updateWorkout);

module.exports = router;
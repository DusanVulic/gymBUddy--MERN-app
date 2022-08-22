const express = require("express");

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
router.post("/", (req, res) => {
    res.json({ msg: "post / create new workout" });
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
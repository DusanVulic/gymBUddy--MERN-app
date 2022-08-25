require("dotenv").config();

//importing express
const express = require("express");
//importing mongoose

const mongoose = require("mongoose");

//express app
const app = express();

//impoting routes from router

const workoutRoutes = require("./routes/workouts");

//importing user routes

const userRoutes = require("./routes/user");

// //middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// midlleware to use json

app.use(express.json());

// routes
app.use("/api/workouts", workoutRoutes);

//routes for AUT
app.use("/api/user", userRoutes);

//connect to DB

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(
                `connected to the DB and listening on port ${process.env.PORT})`
            );
        });
    })
    .catch((error) => {
        console.log(error);
    });
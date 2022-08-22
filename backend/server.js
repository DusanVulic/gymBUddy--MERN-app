require("dotenv").config();

const express = require("express");

//express app
const app = express();

// //middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.get("/", (req, res) => {
    res.json({ msg: "welcome to the gym buddy  app" });
});

// listen for requests

app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT})`);
});
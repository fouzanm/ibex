const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./Routes/AuthRoutes");
const cookieParser = require("cookie-parser");

const app = express();

app.listen(4000, () => {
    console.log("Server Started on PORT 4000")
});

mongoose.connect("mongodb://localhost:27017/ibex").then(() => {
    console.log("MongoDB Connected...")
}).catch((err) => {
    console.log(err.message)
});

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use("/", routes);
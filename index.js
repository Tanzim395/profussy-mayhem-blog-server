const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")

dotenv.config();

const URI = process.env.MONGO_URL;

mongoose.connect(URI, {

    useNewUrlParser: true,

    useUnifiedTopology: true

}, err => {
    if (err) throw err;
    console.log('Hurray!Connected to MongoDB!!!')
});

app.use("/test", (req, res) => {
    console.log("This is test Server")
})

app.listen("5000", () => {
    console.log("backend is running.");
});
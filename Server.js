const express = require("express");
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());

// const path = require("path");
// app.use('/Assets', express.static(path.join(__dirname, '/Assets')));

const path = require("path");
app.use('/Assets/',express.static(path.join(__dirname,'/Assets/')));

// const BlogRoute = require("./Route/BlogRoute");
// app.use(BlogRoute);

const BlogRoute = require("./Route/BlogRoute");
app.use(BlogRoute)

const mongoose = require("mongoose");
const MONGOODP_URL = "mongodb://127.0.0.1:27017/blogers006";

mongoose.connect(MONGOODP_URL)
    .then(() => {
        console.log("MONGODP CONNECTED");
    })
    .catch((err) => {
        console.log("MONGOODP NOT CONNECTED", err);
    });

app.listen(4008, () => {
    console.log("SERVER CONNECTED 4008");
});

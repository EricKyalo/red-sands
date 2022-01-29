const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const dotenv = require("dotenv");

// requiring .env file
require("dotenv").config();

//mongo connection
const connectDB = require("./server/database/database.js");
connectDB();

// initializing express
const app = express();

// setting up ejs & Layouts
app.use(expressLayouts)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", path.join(__dirname, "views/layouts/main"))

// setting up static files (imgs, css, js)
app.use(express.static(path.join(__dirname, "public")))

// setting up routes
// index router/home
app.use("/", require("./server/routes/index"))

// menu router
app.use("/", require("./server/routes/menu"))

//setting PORT
const port = process.env.PORT || 8080;

app.listen(port, () =>{
    console.log(`Listening to port ${port}`)
});
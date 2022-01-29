const express = require("express");
const router = express.Router()


// menu route
router.get("/menu", (req, res) => {
    res.render("menu/menu") 
});

module.exports = router
const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
    {
        telephone: {
            type: String,
            default: Date.now,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        people: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        order: {
            type: String,
            required: true
        }


});

module.exports = mongoose.model("order", orderSchema);
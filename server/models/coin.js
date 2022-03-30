const mongoose = require("mongoose");

const coinSchema = new mongoose.Schema({
    userid: String,
    name: String,
    target: Number,
    threshold: Boolean,
    reached: Boolean,
});

coinSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

module.exports = mongoose.model("Coin", coinSchema);

const mongoose = require("mongoose");

const gamblingSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    coins: {
        type: Number,
        default: 0,
    },
    reward: {
        type: Boolean,
        default: false,
    }
});

gamblingSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

module.exports = mongoose.model("Gambling", gamblingSchema);

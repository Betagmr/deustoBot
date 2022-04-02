const mongoose = require("mongoose");

const coinSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }//,
    // tarjet: {
    //     type: Number,
    //     default: 0
    // },
    // threshold: {
    //     type: Boolean,
    //     default: false
    // },
    // reached: {
    //     type: Boolean,
    //     default: false,
    // }
});

coinSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

module.exports = mongoose.model("Coin", coinSchema);

const mongoose = require("./index");

const SVSchema = new mongoose.Schema({
    name: String,
    location: String,
    username: String,
    phone: String,
    email: String
}, {
    collection: "ServiceProvider"
})

const SVModel = mongoose.model("ServiceProvider", SVSchema);

module.exports = SVModel;
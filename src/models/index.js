const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/demo_ooad');

module.exports = mongoose;
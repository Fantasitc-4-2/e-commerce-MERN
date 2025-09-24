const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A category must have a name"],
    unique: true,
  },
});

const Category = mongoose.model("category", categorySchema);
module.exports = Category;

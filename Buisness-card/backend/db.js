const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/BuisnessCard");

const cardSchema = new mongoose.Schema({
  name: String,
  about: String,
  hobies: [String],
  Linkdin: String,
  Twitter: String,
});

const CardDb = mongoose.model("Card", cardSchema);

module.exports = {
  CardDb,
};

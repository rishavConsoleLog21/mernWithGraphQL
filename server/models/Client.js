const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  lastName: {
    type: String,
    required: [true, "Please add a last name"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
  },
  phone: {
    type: String,
    required: [true, "Please add a phone"],
  },
  state: {
    type: String,
    required: [true, "Please add a state"],
  },
  country: {
    type: String,
    required: [true, "Please add a country"],
  },
});

module.exports = mongoose.model("Client", ClientSchema);

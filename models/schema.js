const mongoose = require("mongoose");

const message = new mongoose.Schema({
  name: {
    type: String,
    default: "Sakthivel A",
  },
  message: {
    type: String
  },
});

 module.exports.messageSchema = mongoose.model("SSE-Message", message);
// module.exports = mongoose.model("docker-test-message", message)

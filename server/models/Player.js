const mongoose = require('mongoose');

let PlayerSchema = new mongoose.Schema(
  {
      name: String,
      user_name: String,
      age: String,
      score: String,
  }
)

module.exports = mongoose.model('Player', PlayerSchema)
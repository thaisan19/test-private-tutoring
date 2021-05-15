const { text } = require("body-parser");
const { Schema } = require("mongoose");

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      email: {
        type: String, 
        required: true, 
        unique: true},
      password: {
         type: String,
         require: true
        },
      role: {
        type: String,
        require: true
      }
    }
  );
  const Admin = mongoose.model("admin", schema);
  return Admin;
};
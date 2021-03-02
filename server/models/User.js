import pkg from "mongoose";
const { Schema, model } = pkg;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
});

const User = model("User", userSchema);

export default User;
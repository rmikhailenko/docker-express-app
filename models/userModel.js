import mongoose from "mongoose";

const userModel = mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    required: [true, "User name is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const User = mongoose.model("User", userModel);

export default User;

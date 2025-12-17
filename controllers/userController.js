import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const registration = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const result = await User.create({
      userName,
      password: hashPassword,
    });

    return res
      .status(200)
      .json({ message: `User created. User name: ${result.userName}` });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Registration failed" });
  }
};

export const login = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(404).json("User not found");
    }

    const isValidCreds = await bcrypt.compare(password, user.password);

    if (!isValidCreds) {
      return res.status(401).json({
        message: "Name or password is incorrect",
      });
    }

    return res.status(200).json({ message: `User valid` });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Failed to login");
  }
};

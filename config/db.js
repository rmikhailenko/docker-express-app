import mongoose from "mongoose";
import { MONGO_IP, MONGO_PASSWORD, MONGO_PORT, MONGO_USER } from "./config.js";

const URI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/mydb?authSource=admin`;

mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

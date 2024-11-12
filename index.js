import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { URI } from "./config/index.js";
import authRoute from "./routes/authRoute.js";
import chatRoute from "./routes/messageRoute.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/api/chat", chatRoute);
app.use("/api/chat", authRoute);

//Connecting to mongodb
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//checking if mongodb is connected successfully
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to Database successfully");
});

export default app;

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/features.js";
import cors from "cors";
import { corsOptions } from "./constants/config.js";

import lobbyRoute from "./routes/lobby.js";
import { errorMiddleware } from "./middlewares/error.js";

dotenv.config({
  path: "./.env",
});

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

connectDB(mongoURI);

const app = express();

// using middlewares
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/v1/lobby", lobbyRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

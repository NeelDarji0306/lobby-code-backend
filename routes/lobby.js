import express from "express";
import { getLobbyInfo, updateLobbyInfo } from "../controllers/lobby.js";

const app = express.Router();

app.get("/", getLobbyInfo);
app.put("/update", updateLobbyInfo);
export default app;

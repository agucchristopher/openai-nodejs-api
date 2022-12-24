import express from "express";
import { createimage, chat } from "../controllers/index.js";

const ai = express.Router();

ai.post("/createimage", createimage);
ai.post("/chat", chat);
export default ai;

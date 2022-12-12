import express from "express";
import { createimage } from "../controllers/index.js";

const ai = express.Router();

ai.post("/generateimage", createimage);
export default ai;

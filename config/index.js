import { Configuration } from "openai";
import { config } from "dotenv";

config();
export const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export const PORT = process.env.PORT;

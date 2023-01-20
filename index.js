import express from "express";
import { PORT } from "./config/index.js";
import bodyParser from "body-parser";
import cors from "cors";
import ai from "./routes/index.js";
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/ai", ai);
app.listen(PORT || 5000, () => {
  console.log(`Server running on port ${PORT}`);
});

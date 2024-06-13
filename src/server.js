import express from "express";
import cors from "cors";

import { summarizeRoute } from "./routes/summarize.routes.js";

const app = express();

//needed to send request from localhost
app.use(cors());

//needed to recive data from form from frontend
app.use(express.urlencoded({ extended: true }));

app.post("/summarize", summarizeRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running");
});

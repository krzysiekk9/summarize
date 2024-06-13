import express from "express";
import { summarize } from "../controllers/summarize.controller.js";

export const summarizeRoute = express.Router();

summarizeRoute.post("/summarize", summarize);

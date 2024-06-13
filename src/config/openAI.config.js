import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
//create new instance of OpenAI with specified API key
//for security reasons API key is saved as a environment variable
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();
//create new instance of Groq with specified API key
//for security reasons API key is saved as a environment variable
export const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

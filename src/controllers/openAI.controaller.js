import { openai } from "../config/openAI.config.js";
import {
  BASE_PROMPT,
  MODEL,
  TEMPERATURE,
} from "../config/parametersLLM.config.js";

//send data to LLM API
export async function openAISummarize(article) {
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `${BASE_PROMPT} ${article}`, //prompt message to LLM
        },
      ],
      model: MODEL, //model of LLM
      temperature: TEMPERATURE, //set desired temperature
    });
    //if there is no error while reciving message then return response
    return chatCompletion.choices[0]?.message?.content || "";
  } catch (err) {
    //if something went wrong throw error further
    throw new Error(err);
  }
}

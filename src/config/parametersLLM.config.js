/************************
 * you can chose between two LLM's providers
 * - OpenAI
 * - Groq
 *  You can aslo chose different models of LLM's
 * - for OpenAI (examples):
 *   - gpt-3.5-turbo-0125,
 *   - gpt-3.5-turbo-0613,
 *   - gpt-4o,
 * - for Gorq (examples):
 *   - llama3-8b-8192,
 *   - llama3-70b-8192,
 *   -mixtral-8x7b-32768
 ************************/

// select LLM's provider
// GROQ or OPEN_AI
export const LLM = "GROQ";
// select LLM's model
export const MODEL = "llama3-8b-8192";

// temperature  ranges from 0 to 2
// if lower value -  more coherent
// if value higher - more creative
export const TEMPERATURE = 0;

//select number of sentences for summarization
const numOfSentences = 7;

export const BASE_PROMPT = `You are a highly skilled AI trained in language comprehension and summarization. Do not add anything else beside summay (important)!! I would like you to read the following text and summarize it into a concise abstract paragraph of ${numOfSentences} sentences. Aim to retain the most important points, providing a coherent and readable summary that could help a person understand the main points of the discussion without needing to read the entire text. Please avoid unnecessary details or tangential points. Remeber that summary should be ${numOfSentences} sentences long. Respond just with the summary noting more. Respond with just summary! Don't add anything else to the response besides the summary. Don't say "here is a summary" and similar things at the beginning. Answer with just plain summary nothing else. The article is from a website. This is the article to summarize: `;

## How does it work?

After selecting the desired article to summarize, copy the URL and send it to the API via the HTML form.

The API will return the summarized article or an error message if something went wrong.

---

### Examople of use

![image](https://github.com/krzysiekk9/summarize/assets/107801980/e29054d8-3de2-418e-a366-56cb180df77a)

The article from example: [Article](https://www.onet.pl/informacje/onettrojmiasto/szesc-miesiecy-rzadu-donalda-tuska-to-wczesniej-czy-pozniej-bedzie-im-wychodzilo/w8236wr,79cfc278)

---

### Changing parameters

The user can change various parameters:

 - selection of LLM provider (Groq or OpenAI) - (I used only Groq API, because OpenAI API is not free, but if the user has tokens in his account, he can choose any option),
 - model selection (The language model which will generate the completion),
 - temerature selection (controls randomness: lowering results in less random completions),
 - number of sentences - length of the summary.

Those parameters user can find and set in the /src/config/parametersLLM.config.js

---

### What was used for this project?

 - Server is made using Node.js and Express.js,
 - To recive data from given URL I used axios,
 - For scraping data from given website I used Cheerio,
 - LMM API - Groq and OpenAI,
 - To safely strore API KEYS I used dotenv,
 - To make requests from localhost I used cores.

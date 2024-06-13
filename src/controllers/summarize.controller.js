import axios from "axios";
import * as cheerio from "cheerio";
import { LLM } from "../config/parametersLLM.config.js";
import { groqSummarize } from "./groq.controller.js";
import { openAISummarize } from "./openAI.controaller.js";

//check for desired tags in given element and add them to the article array
const saveTextFromWebsite = ($, element, article) => {
  const text = $(element);
  const heading1 = text.find("h1").text();
  const heading2 = text.find("h2").text();
  const heading3 = text.find("h3").text();
  const heading4 = text.find("h4").text();
  const heading5 = text.find("h5").text();
  const heading6 = text.find("h6").text();
  const paragraph = text.find("p").text();

  article.push(heading1, heading2, heading3, heading4, heading5, heading6);
  article.push(paragraph);
};

export const summarize = async (req, res) => {
  let article = [];

  //get sended URL via form on frontend
  const getArticleData = async () => {
    try {
      const url = req.body.url;
      const response = await axios.get(url); //get data from the provided url
      const website_html = response.data; // get html of website from the url
      const $ = cheerio.load(website_html); //parse html from string - returns Cheerio object

      //check if selected page has desired classes for article
      //if yes - length is >= 0
      //if not - lenght is === 0
      if ($("article").length) {
        //for each element execute function
        $("article").each((i, element) => {
          saveTextFromWebsite($, element, article);
        });
        //if there is no article tag then get elements from body
      } else if ($("body").length) {
        //for each element execute function
        $("body").each((i, element) => {
          saveTextFromWebsite($, element, article);
        });
      }
    } catch (err) {
      res.status(400).json({
        success: false,
        message: "Could not read the data from URL",
      });
    }
  };
  getArticleData();

  //filter out empty elements
  const cleanedArticle = article.filter((element) => element !== "");

  //check which LLM is used
  const getSummary = async () => {
    let result = "";
    try {
      if (LLM === "GROQ") {
        result = await groqSummarize(cleanedArticle);
      }
      if (LLM === "OPEN_AI") {
        result = await openAISummarize(cleanedArticle);
      }
      if (result === "") {
        res.status(400).json({
          success: false,
          message: "Could not get a summary from the LLM",
        });
      }
      res.status(200).json({ success: true, message: result });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: "Could not get a summary from the LLM",
      });
    }
  };
  getSummary();
};

require("isomorphic-fetch");
const dotenv = require("dotenv");
dotenv.config();

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.summeryController = async (req, res) => {
  // try {
  //   const { text } = req.body;
  //   const { data } = await openai.createCompletion({
  //     model: "text-davinci-003",
  //     prompt: `summerize this \n ${text}`,
  //     max_tokens: 500,
  //     temperature: 0.5,
  //   });

  //   if (data) {
  //     if (data.choices[0].text) {
  //       return res.status(200).json(data.choices[0].text);
  //     }
  //   }
  // } catch (error) {
  //   console.log(error);
  //   return res.status(404).json({
  //     success: false,
  //     message: error.message,
  //   });
  // }
  try {
    const { text } = req.body;
    const formdata = new FormData();
    formdata.append("key", process.env.MEANING_CLOUD_API_KEY);
    formdata.append("txt", text);
    formdata.append("limit", "5");

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    const response = await fetch(
      "https://api.meaningcloud.com/summarization-1.0",
      requestOptions
    );

    if (response.ok) {
      const data = await response.json();
      return res.status(200).json(data.summary);
    } else {
      return res.status(404).json({
        success: false,
        message: "an error occured",
      });
    }
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

exports.paragraphController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `write a detail paragraph about \n ${text}`,
      max_tokens: 500,
      temperature: 0.5,
    });

    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

exports.chatbotController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Act like jarvis from The Avengers.
      me:'what is your name?'
      Jarvis: 'Jarvis is my name' 
      me: ${text}`,
      max_tokens: 300,
      temperature: 0.7,
    });

    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

exports.jsconvertorController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `/* convert these instruction into javascript code \n${text}`,
      max_tokens: 500,
      temperature: 0.25,
    });

    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

exports.scifiimageController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createImage({
      prompt: `generate a scifi image \n${text}`,
      n: 1,
      size: "512x512",
    });

    if (data) {
      if (data.data[0].url) {
        return res.status(200).json(data.data[0].url);
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

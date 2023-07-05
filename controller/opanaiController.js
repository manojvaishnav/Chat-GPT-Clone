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
  const formdata = new FormData();
  // formdata.append("key", "871292cd7fca6ac9673399a89a1702e3");
  // formdata.append("txt", "YOUR TEXT HERE");
  // formdata.append("sentences", "NUMBER OF SENTENCES");
  try {
    const txt = req.body.text;
    const key = "871292cd7fca6ac9673399a89a1702e3";
    const limit = 5;
    const requestOptions = {
      method: "POST",
      body: { key, txt, limit },
      redirect: "follow",
    };
    const response = fetch(
      "https://api.meaningcloud.com/summarization-1.0",
      requestOptions
    );
    if (response) {
      if (response.summery) {
        return res.status(200).json(response.summery);
      }
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

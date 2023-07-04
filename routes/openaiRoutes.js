const express = require("express");
const {
  summeryController,
  paragraphController,
  chatbotController,
  jsconvertorController,
  scifiimageController,
} = require("../controller/opanaiController");

const router = express.Router();

// route
router.post("/summery", summeryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/js-convertor",jsconvertorController);
router.post("/scifi-image",scifiimageController);

module.exports = router;

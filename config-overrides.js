const { injectBabelPlugin } = require("react-app-rewired");

const rewireEmotion = config => {
  return injectBabelPlugin("emotion", config); // <-- updated
};

module.exports = rewireEmotion;

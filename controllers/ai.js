const { errorHandler } = require("../utils");

exports.ai = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/image/ai.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"Văn Tân","data" : `${link}`, "url" : `${link}`});
};
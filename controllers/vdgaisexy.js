const { errorHandler } = require("../utils");

exports.vdgaisexy = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data/video/vdgaisexy.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"Văn Tân","data" : `${link}`, "url" : `${link}`});
};
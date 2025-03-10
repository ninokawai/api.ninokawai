const { errorHandler } = require("../utils");
const fs = require("fs");
const path = require("path");

const controllersPath = path.join(__dirname, "../controllers");

exports.home = async (req, res, next) => {
  const apiUrls = fs.readdirSync(controllersPath)
    .map(file => path.parse(file).name.toLowerCase())
    .reduce((acc, api) => ({ ...acc, [api]: `https://api.ninoka${api}` }), {});

  const jsonString = `========= DANH SÁCH API ========\n
${Object.entries(apiUrls).map(([api, url]) => `${api}:  ${url}`).join("\n\n")}\n\n========= [ COPYRIGHT] =========\n© Trần Văn Tân™\nhttps://www.facebook.com/AnhYeuEm.Tan06`;

  res.set('Content-Type', 'application/json');
  res.send(jsonString);
};
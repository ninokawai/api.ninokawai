const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

const controllersDirectory = path.join(__dirname, "../controllers");

fs.readdirSync(controllersDirectory).forEach(controller => {
    const controllerName = path.basename(controller, ".js");
    router.get(`/${controllerName !== "" ? controllerName : ""}`, require(`../controllers/${controller}`)[controllerName]);
});
module.exports = router;
const path = require("path");
const dotenv = require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

const property_id = process.env.PROPERTY_ID;

module.exports = { property_id };

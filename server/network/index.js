const axios = require("axios").default;

const instance = axios.create({
  baseURL: ".",
  timeout: 2000
});

module.exports = instance;
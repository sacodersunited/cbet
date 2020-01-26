require("dotenv").config({
  path: `.env.development`,
})

// And then you can use the config in gatsby-config.js
const config = require("gatsby-plugin-config").default

module.exports = {
  apiKey: config.APPLITOOLS_API_KEY,
}

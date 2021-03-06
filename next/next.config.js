require("dotenv").config()

module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL,
    PORT: process.env.PORT,
  },
}

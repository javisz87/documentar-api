const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    persistence: process.env.PERSISTENCE,
  
}
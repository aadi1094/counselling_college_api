const express = require("express")
const serverless = require("serverless-http")

const app = express()

app.use(express.json())
//te

app.get("/", (req, res) => {
    res.send("hello, world! from college")
})

app.get("/health", (req, res) => {
    res.send("college_api running")
})

module.exports.handler = serverless(app)
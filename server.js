const bodyParser = require("body-parser")
const cors = require("cors")
const express = require("express")
const next = require("next")
const morgan = require("morgan")

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.MODE !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server
    .use(morgan("dev"))
    .use(cors())
    .use(bodyParser.json())
    .use("/api/welcome", (req, res) =>
      res.status(200).json({ message: "hello welcome to main API" }),
    )
    .all("*", (req, res) => handle(req, res))
    .listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
})

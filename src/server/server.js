const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const mentors = require("./mentors")
const app = express()
const port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// API calls
app.get('/api/mentors', (req, res) => {
  res.send(mentors)
})


if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../../build")))

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../../build", "index.html"))
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`))

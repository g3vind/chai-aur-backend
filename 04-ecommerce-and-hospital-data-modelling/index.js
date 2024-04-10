import express from "express"

const app = express()

const port = 3010

app.get("/", (req, res) => {
  res.send("<h1>Server is running</h1>")
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})

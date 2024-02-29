import express from "express"

const app = express()
const port = 3010

app.get("/", (req, res) => {
  res.send("Server is ready!")
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})

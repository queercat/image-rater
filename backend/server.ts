import express from "express"
import fs from "fs"
import cors from "cors"

type Images = {
  data: string,
  name: string,
  rating: []
}

const app = express()
const port = 3000;

app.post("/api/image", (req, res) => {
  const data = JSON.parse(fs.readFileSync("/images.json", "utf-8")) as Array<Images>
  const newData = req.body as Images
  data.map(d => {
    if(d.name === newData.name) {
      res.status(400).send("name already exists") // I believe this will break out of the loop otherwise i will add a break
    }
  })
  data.push(newData)
  fs.writeFileSync("/images.json", JSON.stringify(data))
  res.send(data)
})

app.listen(port)
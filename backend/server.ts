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

app.use(express.json());

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
  res.send(newData)
})

app.put("/api/image:name", (req, res) => {
  const data = JSON.parse(fs.readFileSync("/images.json", "utf-8")) as Array<Images>
  const newData = req.body
  const userData = req.params.name 
  const updatedData = data.map(d => {
    if(d.name === userData) return newData
    return d;
  })
  fs.writeFileSync("/images.json", JSON.stringify(updatedData))
  res.send()
})

app.listen(port)
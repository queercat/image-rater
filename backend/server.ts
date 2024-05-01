import express from "express"
import fs from "fs"
import cors from "cors"

type Image = {
  data: string,
  name: string,
  rating: number[]
}

const app = express()
const port = 3000;

app.use(cors())
app.use(express.json());

app.post("/api/image", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./images.json", "utf-8")) as Array<Image>
  const newData = req.body as Image
  data.map(d => {
    if(d.name === newData.name) {
      res.status(400).send("name already exists") // I believe this will break out of the loop otherwise i will add a break
    }
  })
  data.push(newData)
  fs.writeFileSync("/images.json", JSON.stringify(data))
  res.send(newData)
})

app.put("/api/image/:name", (req, res) => { // Still need to add the 404 error for this one
  const data = JSON.parse(fs.readFileSync("./images.json", "utf-8")) as Array<Image>
  const newData = req.body
  const userData = req.params.name 
  const updatedData = data.map(d => {
    if(d.name === userData) return newData
    return d;
  })
  fs.writeFileSync("/images.json", JSON.stringify(updatedData))
  res.send();
})

app.get("/api/image/:name", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./images.json", "utf-8")) as Array<Image>
  const userData = req.params.name;
  const dataToSend = data.filter(d => {
    return d.name === userData;
  })

  if(dataToSend.length === 0) res.status(404).send("The searched name doesn't exist")
  res.send(dataToSend[0]); // sending back just <Images> instead of Array<Images>
})

app.get("/api/images/", async (req, res) => {
  const data = JSON.parse(fs.readFileSync("./images.json", "utf-8")) as Array<Image>
  res.send(data);
})

app.post("/api/image/:name/:rank", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./images.json", "utf-8")) as Array<Image>

  const name = req.params.name;
  const rank = parseInt(req.params.rank)

  data.forEach(d => {
    if (d.name === name) {
      d.rating.push(rank)
    }
  })

  fs.writeFileSync("./images.json", JSON.stringify(data))

  res.send()
})

app.delete("/api/image/:name", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./images.json", "utf-8")) as Array<Image>
  const name = req.params.name;

  const updatedData = data.map(d => {
    if (d.name === name) return

    return d
  }).filter(d => d !== undefined)

  fs.writeFileSync("./images.json", JSON.stringify(updatedData))

  res.send()
})

app.listen(port)
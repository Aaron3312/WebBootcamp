import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url)); //this is to get the current directory name

const app = express();
const port = 4200;

app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit"), (req, res) => {
  console.log(req.body);
}


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

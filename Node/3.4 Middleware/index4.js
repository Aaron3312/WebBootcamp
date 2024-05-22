import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); //this is to get the current directory name


const app = express();
const port = 3000;
var bandName = "";


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req, res, bandName) => {
  bandName = req.body["street"] + req.body["pet"];
  res.send(`<h1>Your band name is: </h1><h2> ${bandName}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function loggin(req, res, next, bandName) {
  console.log("Request received");
  next();
}
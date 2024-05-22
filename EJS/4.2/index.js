import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const { fName, lName } = req.body;
  const nameLen = fName.length + lName.length;
  console.log(nameLen);
  res.render("index.ejs", { nameLen});



});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

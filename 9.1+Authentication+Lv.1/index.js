import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { render } from "ejs";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Secrets",
  password: "3312",
  port: 5432,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database");
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {


  const username = req.body.username;
  const password = req.body.password;

  const checkresult = await db.query(`SELECT * FROM users WHERE email='${username}'`);

  if (checkresult.rows.length > 0) {
    console.log("User already exists");
    res.render("register.ejs");
  }
  else {
    const query = `INSERT INTO users (email, password) VALUES ('${username}', '${password}')`;
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.render("secrets.ejs");
      }
    });
  }
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const query = db.query(`SELECT * FROM users WHERE email='${username}' AND password='${password}'`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.rows.length > 0) {
        res.render("secrets.ejs");
      } else {
        console.log("User or password is incorrect");
        res.render("login.ejs");
      }
    }
  }
);



  //lets save this sht
  


});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

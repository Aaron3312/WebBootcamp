import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); //this is to get the current directory name

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	var day = new Date().getDay();
	if (day === 0 || day === 6 || day === 5) {
		res.render("index.ejs", {
			dayType: "a weekend",
			advice: "Its a weekend, go to the park!",
		});
	} else {
		res.render("index.ejs", {
			dayType: "a weekday",
			advice: "Its a weekday, go to work!",
		});
	}
});


app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

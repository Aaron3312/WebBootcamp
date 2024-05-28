import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
	user: "postgres",
	host: "localhost",
	database: "world",
	password: "3312",
	port: 5432,
});

db.connect();

// GET home page
app.get("/", async (req, res) => {
	const result = await db.query("SELECT country_code FROM visited_countries");
	let response = [];
	result.rows.forEach((country) => {
		response.push(country.country_code);
	});

	res.render("index.ejs", { countries: response, total: response.length });
	console.log(response);
});

//INSERT new country
app.post("/add", async (req, res) => {
	const input = req.body["country"];

	try {
		const result = await db.query(
			"SELECT country_code FROM countries WHERE country_name = $1",
			[input]
		);

		if (result.rows.length !== 0) {
			console.log(result.rows);
			const data = result.rows[0];
			console.log(data);
			const countryCode = data.country_code;
			console.log(countryCode);
			try {
				await db.query(
					"INSERT INTO visited_countries (country_code) VALUES ($1)",
					[countryCode]
				);
				res.redirect("/");
			} catch (err) {
				console.log(err);
				const countries = await checkVisisted();
				res.render("index.ejs", {
					countries: countries,
					total: countries.length,
					error: "Country has already been added, try again.",
				});
			}
		}
	} catch (error) {
		console.log(error);
		res.render("index.ejs", { error: error });
	}
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});

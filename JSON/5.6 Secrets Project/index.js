// HINTS:
// 1. Import express and axios
import express from 'express';
import axios from 'axios';
// 2. Create an express app and set the port number.
const app = express();
const PORT = 3000;

// 3. Use the public folder for static files.
app.use(express.static('public'));

// 4. When the user goes to the home page it should render the index.ejs file.
app.get('/', async (req, res) => {
    const secret = await axios.get('https://secrets-api.appbrewery.com/random');
    res.render('index.ejs', { secret: secret.data.secret, username: secret.data.username });
});


// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.get('/secret', async (req, res) => {
    const secret = await axios.get('https://secrets-api.appbrewery.com/random');
    res.render('index.ejs', { secret: secret.data.secret, username: secret.data.username });
});

// 6. Listen on your predefined port and start the server.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
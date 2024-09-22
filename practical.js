
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Simple Web Application</title>
        </head>
   n     <body>
            <h1>Simple Web Application</h1>
            <form action="/greet" method="post">
                <label for="name">Enter your name:</label>
                <input type="text" id="name" name="name" required>
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
});


// Define a route to handle form submission and display greeting
app.post('/greet', (req, res) => {
    const name = req.body.name;
    res.send(`<h1>Hello, ${name}!</h1>`);
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



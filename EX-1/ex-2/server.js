import express from 'express'
const app = express();
const port = 3000;

// Route
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head><title>Home</title></head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple Express.js server.</p>
            </body>
        </html>
        `);
});

app.get('/about', (req, res) => {
    res.send('About us: at CADT, we love node.js!');
});

app.get('/contact-us', (req, res) => {
    res.send('You can reach us via email...');
});

app.get('/products', (req, res) => {
    res.send('Buy one get one...');
});

app.get('/projects', (req, res) => {
    res.send('Here are our awesome projects');
});

// 404 for other routes
app.use((req, res) => {
    res.status(404).send('404 Not found');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:3000`);
});
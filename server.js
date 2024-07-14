const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// Serve index.html on the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Get data
app.get('/message', (req, res) => {
    res.json({message: 'Hello world!'})
}); 

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

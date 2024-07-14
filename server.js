const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// Get data
app.get('/message', (req, res) => {
    res.json({message: 'Hello world!'})
}); 

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
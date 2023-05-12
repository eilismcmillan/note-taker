const express = require('express');
const path = require('path');
const api = require('./develop/routes/index.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))
app.use('/api', api);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'develop/public/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'develop/public/notes.html'))
});

app.listen(PORT, () =>
  console.log(`Note taker app listening at http://localhost:${PORT}`)
);

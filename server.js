const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/report1-details', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/report1-details.html'));
});

app.get('/premium-report1-details', (req, res) => {
    res.sendFile(path.join(__dirname, 'public

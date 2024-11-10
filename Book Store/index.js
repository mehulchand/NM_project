const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Music_player')
.then(() => {
    console.log("Connected to MongoDb")
})
.catch(() => {
    console.log("Error in connecting to MongoDb")
});

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Backend demo')
});

app.listen(7000, () => {
    console.log("Server is listening on port 7000")
});
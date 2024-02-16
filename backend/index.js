const connectToMongo = require('./db');
const express = require('express');
const app = express();
const port = 5000;

// Connect to MongoDB
connectToMongo();

// Enable JSON parsing middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello");
});

app.use('/api/mesg', require('./routes/mesg'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

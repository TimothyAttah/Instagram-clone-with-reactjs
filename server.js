require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get('/', (req, res) => {
	res.send('Hello world');
});

const port = process.env.PORT || 5000;

app.listen(port, () =>
	console.log(`Server started and on running on port ${port}`),
);

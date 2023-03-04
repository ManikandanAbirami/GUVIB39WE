require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

//middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}.`));

//DB connection
connection();

//routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
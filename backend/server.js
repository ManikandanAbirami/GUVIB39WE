const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


const mongoose = require('mongoose');
//uri-Universal Resource Identifier
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connection successful!!!');
});
db.on('error', () => {
  console.log('Connection Failed!!!');
});

const productRouter = require('./routes/product');

app.use('/product', productRouter);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
})
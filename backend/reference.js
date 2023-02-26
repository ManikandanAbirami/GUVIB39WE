const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
})

const mongoose = require('mongoose');
//uri-Universal Resource Identifier
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connection successful!!!');
  //derive/define a schema
  const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
  });

  //complie schema to model
  const Product = mongoose.model('Product', ProductSchema, 'productlist');

  //document instance

  const prod = new Product({
    name: 'Wall poster',
    price: 250,
    quantity: 100
  });

  prod.save(function (err, product) {
    if (err) return console.error(err);
    console.log(product.name + " saved to productlist collection.");
  })

  const prods = [{
    name: 'Stickers',
    price: 50,
    quantity: 100
  },
  {
    name: 'Frames',
    price: 100,
    quantity: 10
  },
  {
    name: 'Hangers',
    price: 20,
    quantity: 20
  }];

  Product.collection.insert(prods, (err, docs) => {
    if (err) {
      return console.error(err);
    }
    else {
      console.log("Multiple documents inserted!!!");
    }
  })

});
db.on('error', () => {
  console.log('Connection Failed!!!');
});








// const walk = () => {
//   console.log("He is walking!!!");
//   setTimeout(() => {
//     console.log("After taking rest for a while, need to drink water!!!!!");
//   }, 2000);
//   run();
// }

// const run = () => {
//   console.log("He is running!!!");
//   setTimeout(() => {
//     console.log("Take water bottle!!!!");
//   }, 1000);
//   rest();
// }

// const rest = () => {
//   console.log("He is taking rest!!!");
// }

// walk();
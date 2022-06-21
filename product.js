const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("Connection open");
    })
    .catch(err => {
        console.log("No connection");
        console.log(err);
    });

const { Schema } = mongoose;

//Defined a schema with constraints
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price must be a positive number"]
    },
    onSale: Boolean
});

//created a model class  **Creates Products collection automatically**
const Product = mongoose.model("Product", productSchema);

//Instantiated a product
const scooter = new Product({
    name: "Electric Scooter",
    price: 300,
    onSale: false
});

scooter.save()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log("Error")
        console.log(err)
    });
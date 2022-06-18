import mongoose from "mongoose";
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp');

const { Schema } = mongoose;

//defined a schema to map to MongoDB collection
const movieSchema = new Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

//created a model class
const Movie = mongoose.model("Movie", movieSchema);
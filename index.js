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

//created a model class  **Creates Movies collection automatically**
const Movie = mongoose.model("Movie", movieSchema);

//Instantiated a movie
const stepBrothers = new Movie({
    title: "Step Brothers",
    year: 2008,
    score: 7.0,
    rating: "R"
});

//Seed data for MongoDB
Movie.insertMany([
    { title: "The Shawshank Redemption", year: 1994, score: 9.2, rating: "R" },
    { title: "The Godfather", year: 1972, score: 9.2, rating: "R" },
    { title: "The Dark Night", year: 2008, score: 9.0, rating: "PG-13" },
    { title: "Schindler's List", year: 1993, score: 8.9, rating: "R" },
    { title: "Pulp Fiction", year: 1994, score: 8.9, rating: "R" }
])
    .then(data => {
        console.log("Working");
        console.log(data);
    });
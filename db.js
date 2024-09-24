const mongoose = require('mongoose');
// Define the mongodb connection URL
const mongodbURL = 'mongodb://localhost:27017/hotels'

// SetUp mongodb connection 
mongoose.connect(mongodbURL);

// Get the default connection 
// Mongoose maintains  a default connection object representing the MongoDB connection.
const db = mongoose.connection;

// Define the event Listner for database connection 

db.on('connected' , () => {
    console.log('Connected to MongoDB server');
});

db.on('error' , (err) => {
    console.log('MongoDB connection error :',err);
});

db.on('disconnected' , () => {
    console.log('MongoDB disconnected');
});

//  Export the databases connection reprenst the mongoDB connection
module.exports = db;


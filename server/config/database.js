const mongoose = require('mongoose');
require("dotenv").config();

const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;
// "mongodb://127.0.0.1:27017/Kodevana"
// process.env.MONGODB_CONNECTION_STRING

const connectToDatabase = () => {
    mongoose.connect(MONGODB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("Database conected"))
        .catch((error) => {
            console.log("Error connecting MongoDB!")
            console.error(error.message)
            process.exit(1);
        })
}
module.exports = connectToDatabase;

/*_*\ --Express for backend-- \*_*/
import express, { Request, Response } from 'express';
import cors from "cors";
const app = express();


// Connect with mongoDB database
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db_KV', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to db_KV database');
  })
  .catch((error: Error | null) => {
    console.error(error);
  });



/*_*\ --For backend and express-- \*_*/
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable Cross-Origin Resource Sharing (CORS) to allow requests from different origins
app.use(cors());

// Define a route for the root URL ("/") that responds with a simple message
app.get("/", (req: Request, res: Response) => {
  res.send("App is Working");
});



// Test the server at http://localhost:5000
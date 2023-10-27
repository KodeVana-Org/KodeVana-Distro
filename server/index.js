const express = require("express");
const cors = require('cors')
const app = express();
require("dotenv").config();

const db = require("./config/database");
const PORT = process.env.PORT;

const cloudinary = require('./config/cloudinary')

const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');

const adminRoutes = require("./router/admin.router");
const blogRoutes = require("./router/blog.router");
const contactRoutes = require("./router/contact.router");
const founderRoutes = require('./router/founder.router');
const projectRoutes = require('./router/project.router');
const visitorRoutes = require('./router/visitor.router');

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));app.use(cors())

app.use(cors({
  origin: ['http://localhost:8000'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Allow cookies and credentials
}));

app.use(cors({
  origin: ['http://localhost:8001'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Allow cookies and credentials
}));

app.use(cookieParser());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

// connectToDatabase
db();
// db.connectToDatabase();

cloudinary.connectToCloudinary();

// Use all routes
app.use('/api', adminRoutes);
app.use('/api', blogRoutes);
app.use('/api', contactRoutes);
app.use('/api', founderRoutes);
app.use('/api', visitorRoutes);
app.use('/api', projectRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});

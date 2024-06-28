const express = require('express');
const connectDB = require('./config/db');
const blogRoutes = require('./routes/blogRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT;

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/',(req,res)=>{
    res.send('healthy');
})

// Routes
app.use('/blogs', blogRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

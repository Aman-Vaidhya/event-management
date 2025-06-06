const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/events',require('./routes/eventRouter'));

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server is running on port " + port)
})
const express = require('express');
const  dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// makein the below2 statments to accept any kind of request from the users 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/openai', require('./routes/openaiRoutes'));
app.listen(port, () =>console.log(`Server started on port ${port}`));
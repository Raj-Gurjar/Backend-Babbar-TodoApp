const express = require("express");
const app = express();

require("dotenv").config();


const PORT = process.env.PORT || 5000;

// middleware to parse json req body

app.use(express.json());

//import route for todo api

const todoRoutes = require("./routes/todo.js");
// const dbConnect = require("./config/database.js");

//mount api

app.use('/api/v1',todoRoutes);

//connect DB
const dbConnect = require('./config/database.js');
dbConnect();


app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
})



app.get('/',(req,res) =>{
  res.send(`<h1>This is Home<h1>`);
})



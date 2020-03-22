// package/dependencies imports
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// Import env file to avoid users getting access to password
require('dotenv/config');



// import routes
const postsRoute = require('./routes/posts');

//execute express
const app = express();

// MIDDLEWARE
// functions that execute when we hit a certain specified route

// INITIAL EXAMPLE
// app.use('/posts',()=>{
//     console.log('middleware on posts')
// })

// we use a middleware so that when we make any request it goes throught the bodyparser

// to allow cross origin access(CORS)
app.use(cors());


// Parse incoming requests data, this middleware on bodyParsse specifically should always be at the very beginning after imports
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this will enable us to ignore the /posts in the route file
app.use('/posts', postsRoute)






// ROUTES
// first argument is the route, second argument is a function with logic on what to do with the response
// function takes 2 arguments==request and response
// app.get('/',(req,res)=>{
// res.send('we are at homepage')
// });


// app.get('/posts',(req,res)=>{
// res.send('we are at post page')
// });

// Connect to DB
// first argument is our link to db accessible via process.config made available by dotenv package
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true }, 
    ()=>console.log('connected to DB'))

// listen to the server for events
app.listen(8000);
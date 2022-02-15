const express = require('express');
const app = express();
const mongoose =require('mongoose');
require('dotenv/config');

//middlewear
//app.use('/posts', () => {
//    console.log('This is our security middleware');
//});


//routes
app.get('/', (req,res) => {
    res.send('We are at home');
});

app.get('/posts', (req,res) => {
    res.send('We are on posts');
});

//connect to database
mongoose.connect(
    process.env.DB_CONNECTION,() =>{
        console.log('Yo I am connected to the DB');
    });
//mongoose.connect('mongosh "mongodb+srv://cluster0.zyffx.mongodb.net/myFirstDatabase" --username Bstocke',() =>{
//    console.log('Connected to DB');
//});

//Listening Port
app.listen(8501);
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser');
const RouterProduct = require("./routers/product")

mongoose.connect('mongodb+srv://elzofils:sadia2020@cluster0.m6lkoeh.mongodb.net/nodeapis?retryWrites=true',{
    useNewUrlParser: true, useUnifiedTopology: true
})
.then( () => {
    console.log("Connexion succes!");
}).catch( (error) =>{
    console.log(error);
})

app.use(bodyParser.json());
app.use('/api/products', RouterProduct)

app.get('/', (req, res) =>{
    res.send("Hello World")
})

module.exports = app;
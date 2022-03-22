const express = require('express');
const bodyParser = require('body-parser');
const {response} = require("express");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res)=>{
    res.sendFile(__dirname +"/index.html");
});

app.post("/",(req,res)=>{
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var bmi = weight / ( height * height );
    res.send("The BMI is "+bmi);
})

app.listen(3000, function () {
    console.log("Server has started on port 3000");
})
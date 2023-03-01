
//requiring packages
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose=require("mongoose");
//setting packages
const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/",function(req,res){
  res.send("hwll");
})

app.listen(3000,function(){
  console.log("working");
})

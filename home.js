const express=require("express");

const app=express();

app.get("/",function(req,res){
  res.send("hwll");
})

app.listen(3000,function(){
  console.log("working");
})

const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello Welcome to the tutorial");
})
app.listen(3000,()=>{
    console.log("Running at port 3000");
})
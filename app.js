const express = require("express");
const bodyparser = require("body-parser")


const app = express();

app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("home");
})
app.get("/cart",(req,res)=>{
    res.render("cart");
})
app.get("/product",(req,res)=>{
    res.render("product");
})

app.listen(3000,()=>{
    console.log("Server in running");
})

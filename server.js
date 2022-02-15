

const express=require("express");
const app =express();
const cors= require('cors');
const connect = require('./app/config/db');
// const routes= require('./app/routes');
// const userController = require('./app/controllers/user.controller');
// const ejs = require('ejs');

const userRoute = require("./app/routes/user.route");

const PORT=5000;
app.set("view engine", "ejs")

// * for CSS
// app.use(express.static("public"))

//cors
app.use(cors());
app.use(express.json())

app.use("/users",userRoute);
// app.use("/users", userController);

app.get("/",(req,res,next)=>{
    res.render("index",{title: "Satya"})
})

const start= async ()=>{
    await connect();
    app.listen(PORT,()=>{
        console.log(`app is listening on port ${PORT}`);
    })
}

module.exports=start;
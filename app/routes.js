
const app=require("express")();
const userController = require('./controllers/user.controller');

app.use("/users",userController)

module.exports= app;
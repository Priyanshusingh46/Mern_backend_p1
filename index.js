const express = require("express");
const cors = require("cors")
const validator = require('validator');
const app = express();
const bodyparser = require("body-parser");
require("./db/Connection.js")
const Register = require("./db/module/Register");
const Login = require("./db/module/Login")
app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("app is running");
});
app.post("/register", async(req,res)=>{
  console.log(req.body);
  try{
    const user = new Register(req.body);
    if(user.password===user.cpassword && validator.isEmail(user.email) && user.name.length>=6 &&  user.name.length<16
    && user.password.length>=6){
    const createUser = await user.save();
    console.log("data saved");
    res.status(201).send(createUser);
    }
    else{
      res.send("status:wrong input");
    }
  }
  catch(e){
    res.status(400).send(e);
  }
})

app.post("/login", async(req,res)=>{
  console.log(req.body);
    try{
      const user = await Register.findOne({ email: req.body.email });
      if(user.password===req.body.password){
        console.log("entered");
        console.log(user.name);
        res.send(user.name);

      }
      else{
        return res.status(400).send();
      }
    }
    catch(error){
      return res.send(error);
    }
})

app.listen(5000);

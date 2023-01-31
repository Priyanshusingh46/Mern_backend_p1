const express = require("express");
const cors = require("cors")
const validator = require('validator');
const app = express();
const bodyparser = require("body-parser");
require("./db/Connection.js")
const Register = require("./db/module/Register");
const Saree = require("./db/module/AddSaree");
const Suit = require("./db/module/AddSuit");
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
    if(validator.isEmail(user.email)){
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
        console.log(user);
        res.send(user);

      }
      else{
        return res.status(400).send("Password not matched");
      }
    }
    catch(error){
      return res.send(error);
    }
})


/* Add Suit Post request */

app.post("/addsuit", async(req,res)=>{
  console.log(req.body);
  console.log("suit");
  try{
    const user = new Suit(req.body);
    const createUser = await user.save();
    console.log("data saved");
    res.send({userCreated});
  }
  catch(e){
    res.send(e);
  }
})

/* Add Saree post request */
app.post("/addsaree", async(req,res)=>{
  console.log(req.body);
  try{
    const user = new Saree(req.body);
    const createUser = await user.save();
    console.log("data saved");
    res.send({userCreated});
    console.log("saree");
  }
  catch(e){
    res.send(e);
  }
})

/* geting saree details */

app.get("/saree",async(req,res)=>{
let result = await Saree.find();
if(result.length>0)
{
  console.log(result);
  res.send(result);
}
else{
  res.send("No Data available");
}
})

app.listen(5000);

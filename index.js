const express = require("express");
const cors = require("cors")
const app = express();
const bodyparser = require("body-parser");
require("./db/Connection.js")
const Login = require("./db/module/Login");
app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("app is running");
});
app.post("/login", async(req,res)=>{
  console.log(req.body);
  try{
    const user = new Login(req.body);
    const createUser = await user.save();
    console.log("data saved");
    res.status(201).send(createUser);
  }
  catch(e){
    res.status(400).send(e);
  }
})

app.listen(5000);

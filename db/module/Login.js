const mongoose = require("mongoose");
const validator = require('validator');
const LoginSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
        Validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Wrong Email");
            }
        }
    },
    password:{
        type:String,
        require:true,
        minlenght:8,
        hide:true
    },

})

const Login = mongoose.model("Login",LoginSchema);
module.exports = Login;
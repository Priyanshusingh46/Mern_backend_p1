const mongoose = require("mongoose");
const validator = require('validator');
const RegisterSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minlenght:6,
        maxlenght:18,
        lowercase:true,
    },
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

    cpassword:{
        type:String,
        require:true,
        hide:true
    },

})

const Register = mongoose.model("Register",RegisterSchema);
module.exports = Register;
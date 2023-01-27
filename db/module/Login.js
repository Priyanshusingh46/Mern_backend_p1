const mongoose = require("mongoose");
const LoginSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minlenght:[6,"min 6 length required"],
        maxlenght:18,
        lowercase:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})

const Login = mongoose.model("Login",LoginSchema);
module.exports = Login;
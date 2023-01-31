const mongoose = require("mongoose");
const validator = require('validator');
const AddSareeSchema = new mongoose.Schema({
    type:{
        type:String,
        require:true,
    },
    company:{
        type:String,
        require:true,
    },
    price:{
        type: Number,
        require:true,
    },

    available:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },

})

const AddSaree = mongoose.model("Saree",AddSareeSchema);
module.exports = AddSaree;
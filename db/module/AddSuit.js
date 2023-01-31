const mongoose = require("mongoose");
const validator = require('validator');
const AddSuitSchema = new mongoose.Schema({
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

const AddSuit = mongoose.model("Suit",AddSuitSchema);
module.exports = AddSuit;
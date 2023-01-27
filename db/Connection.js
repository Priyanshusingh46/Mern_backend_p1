const mongoose = require("mongoose");
const DB = "mongodb+srv://Priyanshu:Priya@db.oqlwuar.mongodb.net/Backend?retryWrites=true&w=majority"
const connectDB = mongoose.connect(DB).then(()=>{
    console.log("connection succesfull")
}).catch((err)=>{
    console.log("no connection");
})

module.exports = connectDB;

// useNewUrlParser:true,
    //useCreateIndex:true,
    //useUnifiedTopology:true,
    //useFindAndModify:false
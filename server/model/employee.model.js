const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,

  } ,
  email:{
    type:String,
    required:true,
  },
  photo: {
    url:{
      type:String,
      required:true
    }
  },
  roles:{
    type:String,
  },
  skill:{
    type:String
  },
  
});

module.exports = mongoose.model("Employee", employeeSchema);

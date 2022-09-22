const mongoose = require("mongoose")

const salarySchema = mongoose.Schema({
    salarySipId:{
        type:Number,
    },
    EmployeeId:{
        type:Number,
      
    },
    BankName:{
        type:String,
      
    },
    BankAccountNo:{
        type:Number,
      
    },
    IFSCCode:{
        type:Number
    },
   
    AdharNumber:{
        type:String
    },
    EnrollmentId:{
        type:Number
    },
  

},{
timestamps:true
})
module.exports = mongoose.model("salary",salarySchema)
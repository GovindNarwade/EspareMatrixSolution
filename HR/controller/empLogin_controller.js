const employee = require("../model/empmodel")
brycpt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.Employeelogin = async(req,res) =>{
    try {
     const {EmailId,Password} = req.body
     const result = await employee.findOne({EmailId}) 
     
     if(!result){
         return res.json({
             success:false,
             message:"Plese enter your correct Email",
             data:null
 
         })
        }
    //  email found
     const verify = await brycpt.compare(Password,result.Password)  
     if(!verify){
        return res.json({
            success:false,
            message:"Plese enter your correct Password",
            data:null
 
        }) 
 }
 const token = await jwt.sign({user:result._id},process.env.JWT_SECRET_KEY)
 // all email and pasword match
 const resAdmin = await employee.find()
 res.json({
    success:true,
    message:"You are logged in",
    data:resAdmin,
     token
 
 })
 console.log(result);
    } catch (error) {
     res.json({
         success:false,
         message:`Something went worng ${error}`,
         data:null
         
      
      })  
      console.log(error);
    }
 }
 
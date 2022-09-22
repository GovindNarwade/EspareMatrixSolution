const salary = require("../model/salary_model")
exports.createsalary = async(req,res)=>{
 try {
    const result = await salary.create({
        salarySipId:Math.floor((Math.random()*100000)+1),
        EmployeeId:req.body.EmployeeId,
        BankName:req.body.BankName,
        BankAccountNo:req.body.BankAccountNo,
        IFSCCode:req.body.IFSCCode,
        AdharNumber:req.body.AdharNumber,
        EnrollmentId:req.body.EnrollmentId,
    
     })
     res.json({
        success:true,
        message: "salary Created Successfully",
        data:result
     })
 } catch (error) {
    res.json({
        success:false,
        message: `Something went worng `+ {error},
        data:null
     })
 }
}
exports.viewsalary = async(req,res)=>{
    try {
        const result = await salary.aggregate([
            {
$lookup:{
    from:"employees",
    localField:"EmployeeId",
    foreignField:"EmployeeId",
    as:"Employee"
}
            }
        ]) 
        res.json({
            count:result.length,
            success:true,
            message:"get salary Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message: `Something went worng `+ {error},
            data:null
         })
    }
}
exports.deletesalaryDetails = async(req,res)=>{
    try {
        const result = await salary.findOneAndDelete({salarySipId:req.params.salarySipId})
        res.json({
            success:true,
            message:"Delete salary Details",
            data:null
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.updatesalaryDetails = async(req,res)=>{
    try {
        const result = await salary.findOneAndUpdate({salarySipId:req.body.salarySipId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update salary Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong"+Error,
            data:null
        })  
    }
}
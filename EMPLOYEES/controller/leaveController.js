const leaveModel = require("../models/leaveModel");


exports.applyForLeave = (req,res) =>{
    let Form = new leaveModel({
        EmployeeId: req.body.EmployeeId,
        LeaveId: Math.floor(Math.random()*1000),
        LeaveType: req.body.LeaveType,
        LeaveDescription: req.body.LeaveDescription,
        LeaveFrom: req.body.LeaveFrom,
        LeaveTo: req.body.LeaveTo,
        Status: "A Waiting Approvel"
    });

    Form.save((err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Leave Form Submited Successfully!");
        }
    });
}



exports.checkLeaveHistory = (req, res) => {
    const ID = req.params.employeeId;

    leaveModel.find({ EmployeeId: ID }, (err, result) => {
        if (err) {
            res.json({
                Success: false,
                msg: "Error: "+err,
                data: null
            });
        } else {
            res.json({
                Success: true,
                msg: "Leaves History Fetch Successfully",
                data: result
            });
        }
    });
}



exports.getAllLeavesApplication = (req,res) =>{
    leaveModel.find({},(err,result)=>{
        if(err){
            res.json({
                Success: false,
                msg: "Error: "+err,
                data: null
            });
        }else{
            res.json({
                Success: true,
                msg: "All Leaves Application Fetch Successfully",
                data: result
            });
        }
    });
}



exports.getLeavesCount = (req,res) =>{
    const ID = req.params.employeeId;

    payrollModel.findOne({EmployeeId: ID},(err,result)=>{
        if(err){
            res.json({
                Sucess: false,
                msg: "Error: "+err,
                data: null
            });
        }else{
            res.json({
                Sucess: true,
                msg: "Fetch Leaves Count Sucessfully",
                data:{
                    AllLeaves: result.AllLeaves,
                    MedicalLeaves: result.MedicalLeaves,
                    CasualLeaves: result.CasualLeaves
                }
                
            });
        }
    });
}



exports.deleteLeaveApplication = (req,res) =>{
    const leaveid = req.params.leaveId;

   leaveModel.findOneAndDelete({LeaveId: leaveid},(err,result)=>{
        if(err){
            res.json({
                Success: false,
                msg: "Error: "+msg,
                data: null
            });
        }else{
            res.json({
                Success: true,
                msg: "Leave Application with LeaveId: "+leaveid+" deleted successfully"
            });
        }
   }) 
}
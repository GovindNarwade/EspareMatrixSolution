const employeeModel = require("../models/empModel");
const leaveModel = require("../models/leaveModel");
const cloudinary = require("../config/cloudinary");
const attendanceModel = require("../models/attendanceModel");
const payrollModel = require("../models/payrollModel");
const hours = require("convert-string-time");

//______________________________ Employee Dashboard ___________________________




//------------------ Register Empolyee -----------------------------

exports.register = async (req, res) => {    
    let count = (await employeeModel.countDocuments()+1)+100;
    const details = new employeeModel({
        EmployeeId: "EM-SM"+count,
        // EmployeeId: "EM-SM"+Math.floor((Math.random()*10000)+1),
        JoiningDate: req.body.JoiningDate,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        FatherName: req.body.FatherName,
        ContactNumber: req.body.ContactNumber,
        DateOfBirth: req.body.DateOfBirth,
        Gender: req.body.Gender,
        MaritalStatus: req.body.MaritalStatus,
        BloodGroup: req.body.BloodGroup,
        Country: req.body.Country,
        CurrentAddress: req.body.CurrentAddress,
        PermanantAddress: req.body.PermanantAddress,
        Department: req.body.Department,
        Role: req.body.Role,
        PanCard: req.body.PanCard,
        EmailId: req.body.EmailId,
        Password: req.body.Password,
    });
    details.save((err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Register Employee Sucessfully!");
        }
    })

}




//------------------ Fetch All Employees Details-------------

exports.getAll = async (req, res) => {
    let result;
    employeeModel.find({}, (err, result) => {
        res.send(result);
    });

}





//------------------ Fetch One Employee with EmployeeId --------------------------

exports.getOne = (req,res) => {
    const ID = req.params.employeeId;

    employeeModel.findOne({EmployeeId: ID},(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
}





//------------------ Update employee details -----------------------------
exports.update = (req, res) => {
    var ID = req.params.employeeId;

    var details = {
        EmailId: req.body.EmailId,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        ContactNumber: req.body.ContactNumber
    }

    employeeModel.findOneAndUpdate({ EmployeeId: ID }, details, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Employee Details with EmployeeID " + ID + " Updated Sucessfully!");
        }
    });
}





//------------------ Update Profile Details ----------------

exports.updateProfile = async (req, res) => {
    var ID = req.params.employeeId;

    const result = await cloudinary.uploader.upload(req.file.path,{folder:"EmployeeProfile",use_filename : true, unique_filename : false});

    var details = {
        Profile: result.secure_url,
        EmployeeId: req.body.EmployeeId,
        Department: req.body.Department,
        Role: req.body.Role,
        JoiningDate: req.body.JoiningDate,
        ConfirmDate: req.body.ConfirmDate,
        EmailId: req.body.EmailId,
        ReportingTo: req.body.ReportingTo,
        FirstName: req.body.FirstName,
        MiddleName: req.body.MiddleName,
        LastName: req.body.LastName,
        FatherName: req.body.FatherName,
        ContactNumber: req.body.ContactNumber,
        DateOfBirth: req.body.DateOfBirth,
        Gender: req.body.Gender,
        MaritalStatus: req.body.MaritalStatus,
        BloodGroup: req.body.BloodGroup,
        Country: req.body.Country,
        CurrentAddress: req.body.CurrentAddress,
        PermanantAddress: req.body.PermanantAddress,
        PanCard: req.body.PanCard,
        AadharCardNumber: req.body.AadharCardNumber,
        AadharEnrollmentNumber: req.body.AadharEnrollmentNumber,
        BankName: req.body.BankName,
        BankAccountNumber: req.body.BankAccountNumber,
        IFSCCode: req.body.IFSCCode,
    }
    employeeModel.findOneAndUpdate({ EmployeeId: ID }, details, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Employee Details with EmployeeID " + ID + " Updated Sucessfully!");
        }
    });
}





//------------------ Update education details ---------------

exports.updateEducation = (req, res) => {
    var ID = req.params.employeeId;

    var details = {
        SecondarySchoolName: req.body.SecondarySchoolName,
        SecondarySchoolPassingYear: req.body.SecondarySchoolPassingYear,
        SecondarySchoolPercentage: req.body.SecondarySchoolPercentage,
        SrSecondarySchoolName: req.body.SrSecondarySchoolName,
        SrSecondarySchoolPassingYear: req.body.SrSecondarySchoolPassingYear,
        SrSecondarySchoolPercentage: req.body.SrSecondarySchoolPercentage,
        GradutionCollageName: req.body.GradutionCollageName,
        GradutionCollagePassingYear: req.body.GradutionCollagePassingYear,
        GradutionCollagePercentage: req.body.GradutionCollagePercentage,
        PostGraduationCollageName: req.body.PostGraduationCollageName,
        PostGraduationCollagePassingYear: req.body.PostGraduationCollagePassingYear,
        PostGraduationCollagePercentage: req.body.PostGraduationCollagePercentage
    }

    employeeModel.findOneAndUpdate({ EmployeeId: ID }, details, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Employee Details with EmployeeID " + ID + " Updated Sucessfully!");
        }
    });
}





//------------------ Update experience details ----------------

exports.updateExperience = (req, res) => {
    var ID = req.params.employeeId;

    var details = {
        Company1Name: req.body.Company1Name,
        Company1Designation: req.body.Company1Designation,
        Company1JobJoinFrom: req.body.Company1JobJoinFrom,
        Company1JobTo: req.body.Company1JobTo,
        Company2Name: req.body.Company2Name,
        Company2Designation: req.body.Company2Designation,
        Company2JobJoinFrom: req.body.Company2JobJoinFrom,
        Company2JobTo: req.body.Company2JobTo,
        Company3Name: req.body.Company3Name,
        Company3Designation: req.body.Company3Designation,
        Company3JobJoinFrom: req.body.Company3JobJoinFrom,
        Company3JobTo: req.body.Company3JobTo
    }

    employeeModel.findOneAndUpdate({ EmployeeId: ID }, details, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Employee Details with EmployeeID " + ID + " Updated Sucessfully!");
        }
    });
}


//------------------- Delete One Employee -----------------------

exports.delete = (req, res) => {
    var ID = req.params.employeeId;

    employeeModel.deleteOne({ EmployeeId: ID }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Employee with EmployeeID " + ID + " Deleted Sucessfully!");
        }
    });
}






//_________________________________ Attendance System ________________________________

exports.submitAttendance = async (req,res) => {
     
    const response = await cloudinary.uploader.upload(req.file.path,{folder:"EmployeeAttendance",use_filename : true, unique_filename : false});

    const data = await attendanceModel.findOne({EmployeeId: req.body.EmployeeId}).sort({_id:-1});

    if(data){
        if(req.body.Date == data.Date){

            if(req.body.AttendanceCheckout == "LogOut"){

                const data = await attendanceModel.findOneAndUpdate({EmployeeId: req.body.EmployeeId},{LogOutPicture: response.secure_url,EndTime: req.body.Time,AttendanceCheckout: req.body.AttendanceCheckout,Location: req.body.Location}).sort({_id:-1});
            }

           const Result = await attendanceModel.findOne({EmployeeId: req.body.EmployeeId}).sort({_id:-1});

                let StartTime = Result.StartTime;
                let EndTime = Result.EndTime;
                

                let StartHours = hours.to24Hours(StartTime);
                let EndHours = hours.to24Hours(EndTime);
                

                const Data = await payrollModel.findOne({EmployeeId: req.body.EmployeeId});
                if(StartTime > "10:00 AM"){

                    payrollModel.findOneAndUpdate({EmployeeId: req.body.EmployeeId},{LateLogin : (Data.LateLogin + 1)},(err,result)=>{
                        if(err){
                            res.json({
                                Sucess: false,
                                msg: "Error: "+err
                            });
                        }
                    });
                }

                if(EndTime < "06:00 PM"){

                    payrollModel.findOneAndUpdate({EmployeeId: req.body.EmployeeId},{EarlyLogout : (Data.EarlyLogout + 1)},(err,result)=>{
                        if(err){
                            res.json({
                                Sucess: false,
                                msg: "Error: "+err
                            });
                        }
                    });
                }


                let LogIn = StartHours.split(":");
                let LogOut = EndHours.split(":");
    
                let duration1 = parseInt(LogOut[0]) - parseInt(LogIn[0]);
                let duration2 = parseInt(LogOut[1]) - parseInt(LogIn[1]);
                
                const totalTime = (duration1+":" +duration2);
                
                
                payrollModel.findOne({EmployeeId: req.body.EmployeeId},(err,result)=>{
                    if(!err){
                        if(result){
                            if(duration1>=8){
                                payrollModel.findOneAndUpdate({EmployeeId: req.body.EmployeeId},{PresentDays: result.PresentDays+1},(err,result)=>{
                                    if(err){
                                        res.json({
                                            Sucess: false,
                                            msg: "Error: "+err
                                        });
                                    }else{
                                        res.json({
                                            Sucess: true,
                                            msg: "PresentDay"
                                        });
                                    }
                                });
                            }else if(duration1>=4){
                                payrollModel.findOneAndUpdate({EmployeeId: req.body.EmployeeId},{HalfDays: result.HalfDays+1},(err,result)=>{
                                    if(err){
                                        res.json({
                                            Sucess: false,
                                            msg: "Error: "+err
                                        });
                                    }else{
                                        res.json({
                                            Sucess: true,
                                            msg: "HalfDay"
                                        });
                                    }
                                });
                            }else{
                                payrollModel.findOneAndUpdate({EmployeeId: req.body.EmployeeId},{AbsentDays: result.AbsentDays+1},(err,result)=>{
                                    if(err){
                                        res.json({
                                            Sucess: false,
                                            msg: "Error: "+err
                                        });
                                    }else{
                                        res.json({
                                            Sucess: true,
                                            msg: "AbsentDay"
                                        });
                                    }
                                });
                            }
                        }else{
                            if(duration1>=8){
                                payrollModel.insertMany({
                                    EmployeeId: req.body.EmployeeId,
                                    PresentDays: 1,
                                    AbsentDays: 0,
                                    HalfDays: 0
                                },(err,result)=>{
                                    if(!err){
                                        res.json({
                                            Sucess: true,
                                            msg: "Employee PayrollData Sucessfully Inserted"
                                        });
                                    }
                                });
                            }else if(duration1>=4){
                                payrollModel.insertMany({
                                    EmployeeId: req.body.EmployeeId,
                                    PresentDays: 0,
                                    AbsentDays: 0,
                                    HalfDays: 1
                                },(err,result)=>{
                                    res.json({
                                        Sucess: true,
                                        msg: "Employee PayrollData Sucessfully Inserted"
                                    });
                                });
                            }else{
                                payrollModel.insertMany({
                                    EmployeeId: req.body.EmployeeId,
                                    PresentDays: 0,
                                    AbsentDays: 1,
                                    HalfDays: 0
                                },(err,result)=>{
                                    res.json({
                                        Sucess: true,
                                        msg: "Employee PayrollData Sucessfully Inserted"
                                    });
                                })
                            }
                            
                        }
                    }
                });
        }else{
            const attendance = new attendanceModel({
                LogInPicture: response.secure_url,
                EmployeeId: req.body.EmployeeId,
                Department: req.body.Department,
                Role: req.body.Role,
                Name: req.body.Name,
                Date: req.body.Date,
                StartTime: req.body.Time,
                Month: req.body.Month,
                Location: req.body.Location,
                AttendanceCheckout: req.body.AttendanceCheckout
             });
        
             attendance.save((err)=>{
                if(err){
                    res.json({
                        Sucess: false,
                        msg: "Error: "+err,
                        data: null
                    });            
                }else{
                    res.json({
                        Sucess: true,
                        msg: "Attendance Submited Sucessfully!!!!"
                    });
                }
                
             });
        }

    }else{
        const attendance = new attendanceModel({
            StartPicture: result.secure_url,
            EmployeeId: req.body.EmployeeId,
            Department: req.body.Department,
            Role: req.body.Role,
            Name: req.body.Name,
            Date: req.body.Date,
            StartTime: req.body.Time,
            Month: req.body.Month,
            Location: req.body.Location,
            AttendanceCheckout: req.body.AttendanceCheckout
         });
    
         attendance.save((err)=>{
            if(err){
                res.json({
                    Sucess: false,
                    msg: "Error: "+err,
                    data: null
                });            
            }else{
                res.json({
                    Sucess: true,
                    msg: "Attendance Submited Sucessfully!"
                });
            }
            
         });
    }
}


exports.getAttendance = (req,res) => {
    const ID = req.params.employeeId;

    payrollModel.findOne({EmployeeId: ID},(err,result)=>{
        if(err){
            res.json({
                Sucess: false,
                msg: "Error: "+err
            });
        }else{
            res.json({
                Sucess: true,
                PresentDays: result.PresentDays,
                HalfDays: result.HalfDays,
                AbsentDays: result.AbsentDays,
                LateLogin: result.LateLogin,
                EarlyLogout: result.EarlyLogout
            });
        }
    });
}



//__________________________________ Leave Section ___________________________________


exports.applyForLeave = (req, res) => {

    let Form = new leaveModel({
        EmployeeId: req.body.EmployeeId,
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
            res.send(err);
        } else {
            res.send(result);
        }
    });
}



exports.getLeavesCount = (req,res) =>{
    const ID = req.params.employeeId;

    payrollModel.findOne({EmployeeId: ID},(err,result)=>{
        if(err){
            res.json({
                Sucess: false,
                msg: "Error: "+err
            });
        }else{
            res.json({
                Sucess: true,
                AllLeaves: result.AllLeaves,
                MedicalLeaves: result.MedicalLeaves,
                CasualLeaves: result.CasualLeaves
            });
        }
    });
}


exports.acceptLeaveApplication = async (req, res) => {
    const ID = req.params.employeeId;

    const status = {
        Status: "Approved"
    }


    const result = await leaveModel.findOneAndUpdate({ EmployeeId: ID }, status).sort({_id:-1});
            let medical;
            let casual;

           payrollModel.findOne({EmployeeId: ID},(err,data)=>{
                if(err){
                    data.json({
                        Status: false,
                        msg: "Error: "+err
                    }); 
                }else{
                    if(result.LeaveType == "Medical"){
                        if(data.MedicalLeaves == 0){
                            medical = 1;
                        }else{
                            medical = (data.MedicalLeaves + 1);
                        }
                    }else if(result.LeaveType == "Casual"){
                        if(data.CasualLeaves === null){
                            casual = 1;
                        }else{
                            casual = (data.CasualLeaves + 1);
                        }
                    }
    
                    payrollModel.findOneAndUpdate({EmployeeId: ID},{AllLeaves: (data.AllLeaves + 1),MedicalLeaves: medical,CasualLeaves: casual},(err,result)=>{
                        if(err){
                            res.json({
                                Status: false,
                                msg: "Error: "+err
                            }); 
                        }else{
                            res.json({
                                Status: true,
                                msg: "Leave Application Approved Sucessfully!",
                            });
                        }
                    })
                }
                
           });
        
}




exports.rejectLeaveApplication = (req, res) => {
    const ID = req.params.employeeId;

    const status = {
        Status: "Not Approved"
    }

    leaveModel.findOneAndUpdate({ EmployeeId: ID }, status, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send("LeaveForm Not-Approved");
        }
    });
}

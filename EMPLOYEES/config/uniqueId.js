const employeeModel = require("../models/empModel");

module.exports = function getId(){
   let ID;
   let i = 101;
   while (i<=1000) {
      ID = "EM-SM"+i;
      employeeModel.findOne({EmployeeId : ID},(err,result)=>{
         if(err){
            console.log(err);
         }else{
            if(!result){
                return ID;
            }else{
                i=i+1;
            }
         }
      });
   }
}
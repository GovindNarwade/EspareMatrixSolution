const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
      LogInPicture: {
        type: String
      },
      LogOutPicture: {
        type: String
      },
      EmployeeId: {
        type: String
      },
      Department: {
        type: String
      },
      Role: {
        type: String
      },
      Name: {
        type: String
      },
      Date: {
        type: String
      },
      StartTime: {
        type: String
      },
      EndTime: {
        type: String
      },
      Month: {
        type: String
      },
      Location: {
        type: String
      },
      AttendanceCheckout: {
        type: String
      }
});

const attendanceModel = mongoose.model("employeeAttendance",attendanceSchema);

module.exports = attendanceModel;
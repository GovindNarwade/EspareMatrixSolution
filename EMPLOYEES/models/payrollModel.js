const mongoose = require("mongoose");

const payrollSchema = new mongoose.Schema({
    EmployeeId: {
        type: String
    },
    PresentDays: {
        type: Number
    },
    AbsentDays: {
        type: Number
    },
    HalfDays: {
        type: Number
    },
    AllLeaves: {
        type: Number,
        default: 0
    },
    MedicalLeaves: {
        type: Number,
        default: 0
    },
    CasualLeaves: {
        type: Number,
        default: 0
    }
});

const payrollModel = mongoose.model("payrollData",payrollSchema);

module.exports = payrollModel;
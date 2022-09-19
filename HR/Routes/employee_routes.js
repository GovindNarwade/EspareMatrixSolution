const express = require("express")
const {CreateEmployeeTask,GetAllEmplyeeTask,deleteEmplyeeTask,updateEmplyeeTaskDetails} = require("../controller/EmployeeTask_controller")
const router = express.Router()
router.route("/CreateEmployeeTask").post(CreateEmployeeTask)
router.route("/GetAllEmplyeeTask").get(GetAllEmplyeeTask)
router.route("/deleteEmplyeeTask/:TaskId").delete(deleteEmplyeeTask)
router.route("/updateEmplyeeTaskDetails").put(updateEmplyeeTaskDetails)
module.exports = router

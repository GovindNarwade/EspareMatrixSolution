const express = require("express")
const {CreateTrainingSchedule,GetAllTrainingSchedule,updateTrainingScheduleDetails,deleteTrainingSchedule} = require("../controller/TrainingSchedule_controller")
const router = express.Router()
router.route("/CreateTrainingSchedule").post(CreateTrainingSchedule)
router.route("/GetAllTrainingSchedule").get(GetAllTrainingSchedule)
router.route("/deleteTrainingSchedule/:TravelScheduleId").delete(deleteTrainingSchedule)
router.route("/updateTrainingScheduleDetails").put(updateTrainingScheduleDetails)
module.exports = router

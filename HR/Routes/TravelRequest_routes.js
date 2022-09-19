const express = require("express")
const {CreateTravelRequest,GetAllTravelRequest,deleteTravelRequest,updateTravelRequestDetails} = require("../controller/travelRequest_controller")
const router = express.Router()
router.route("/CreateTravelRequest").post(CreateTravelRequest)
router.route("/GetAllTravelRequest").get(GetAllTravelRequest)
router.route("/deleteTravelRequest/:TravelRequestId").delete(deleteTravelRequest)
router.route("/updateTravelRequestDetails").put(updateTravelRequestDetails)
module.exports = router

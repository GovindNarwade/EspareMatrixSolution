const express = require("express")
const {CreateAppraisal,GetAllAppraisal,deleteAppraisal,updateAppraisalDetails} = require("../controller/Appraisal_controller")
const router = express.Router()
router.route("/CreateAppraisal").post(CreateAppraisal)
router.route("/GetAllAppraisal").get(GetAllAppraisal)
router.route("/deleteAppraisal/:TaskId").delete(deleteAppraisal)
router.route("/updateAppraisalDetails").put(updateAppraisalDetails)
module.exports = router

const express = require("express")
const {CreateTrainingSchedule,GetAllTrainingSchedule,updateTrainingScheduleDetails,deleteTrainingSchedule} = require("../controller/TrainingSchedule_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     TraingSchedule :
 *       type: object
 *       required:
 *          - TravelScheduleId
 *          - EmployeeId
 *          - TrainingSchedule
 *          - Title
 *          - Date
 *          - Day
 *          - StartTime
 *          - EndTime
 *          - Description
 *          - Status
 *       properties:
 *         TravelScheduleId :
 *           type : integer
 *           description: 1234
 *         EmployeeId :
 *           type: string
 *           description: 7894
 *         TrainingSchedule : 
 *            type: string
 *            description: avcd
 *         Title :
 *           type: string 
 *           description: ABC
 *         Date :
 *           type : string
 *           description: sdfg
 *         Day :
 *           type : string
 *           description: high
 *         StartTime :
 *           type : string
 *           description: ASDF
 *         EndTime: 
 *           type : string
 *           description: ASDF
 *         Description :
 *           type : string
 *           description: ASDF
 *         Status :
 *           type: string 
 *           description: ASDF
 * 
 *       example: 
 *          TravelScheduleId : Auto generated
 *          EmployeeId : 1234
 *          TrainingSchedule : avcdf
 *          Title : Advanced Nodejs
 *          Date : 30-09-2022
 *          Day : Saturday
 *          StartTime : 10:00 AM
 *          EndTime : 04:00 PM
 *          Description : session in nodejs
 *          Status : Active   
 *
 */


/**
 * @swagger
 * /api/v1/CreateTrainingSchedule:
 *   post:
 *     summary: Create TraingSchedule Details
 *     tags: [TraingSchedule]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TraingSchedule'
 *     responses:
 *       200:
 *         description: TraingSchedule create successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TraingSchedule'
 *       500:
 *         description: Some server error
 */
router.route("/CreateTrainingSchedule").post(CreateTrainingSchedule)

/**
 * @swagger
 * /api/v1/GetAllTrainingSchedule:
 *   get:
 *     summary: get all TraingSchedule
 *     tags: [TraingSchedule]
 *     responses:
 *       200:
 *         description: get All TraingSchedule
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/TraingSchedule'
 */
router.route("/GetAllTrainingSchedule").get(GetAllTrainingSchedule)
router.route("/deleteTrainingSchedule/:TravelScheduleId").delete(deleteTrainingSchedule)
router.route("/updateTrainingScheduleDetails").put(updateTrainingScheduleDetails)
module.exports = router

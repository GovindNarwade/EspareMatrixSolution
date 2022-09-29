const express = require("express");
const router = express.Router();
const leaves = require("../controller/leaveController");

/**
 * @swagger
 * components:
 *   schemas:
 *     employee6:
 *       type: object
 *       required:
 *         - EmployeeId
 *         - LeaveType
 *         - LeaveDescription
 *         - LeaveFrom
 *         - LeaveTo
 *         - Status
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a employee
 *         EmployeeId:
 *           type: string
 *           description: The employee id 
 *         LeaveType:
 *           type: string
 *           description: Type of leave
 *         LeaveDescription:
 *           type: string
 *           descripton: Description of leave
 *         LeaveFrom:
 *           type: string
 *           descripton: Date of leave start
 *         LeaveTo:
 *           type: string
 *           descripton: Date of leave end
 *         Status:
 *           type: string
 *           descripton: Status of leave application
 *         
 *       example:
 *         EmployeeId: EM-SM101
 *         LeaveId: 890 (This id will auto-genrate)
 *         LeaveType: Medical
 *         LeaveDescription: Heavy Fever
 *         LeaveFrom: 22-09-22
 *         LeaveTo: 24-09-22
 */

/**
 * @swagger
 * /employee/leaves/applyForLeave:
 *   post:
 *     summary: Apply for leave
 *     tags: [Leaves]
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/employee6'
 *     responses:
 *       200:
 *         description: Leave Application Submited Sucessfully!
 *   
 */

router.post("/applyForLeave",leaves.applyForLeave);


/**
 * @swagger
 * /employee/leaves/checkLeaveHistory/{employeeId}:
 *   get:
 *     summary: Returns history of leave application
 *     tags: [Leaves]
 *     parameters: 
 *         - in: path
 *           name: employeeId
 *           required: true
 *           description: employeeId is required
 *           schema:
 *              type: string
 * 
 *     responses:
 *       200:
 *         description: history of leave application
 *         
 */
 router.get("/checkLeaveHistory/:employeeId",leaves.checkLeaveHistory);



/**
 * @swagger
 * /employee/leaves/getAllLeavesApplication:
 *   get:
 *     summary: Returns all Leave Apllications
 *     tags: [Leaves]
 *     responses:
 *       200:
 *         description: all Leave Apllications
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/employee6'
 */
router.get("/getAllLeavesApplication",leaves.getAllLeavesApplication);



/**
 * @swagger
 * /employee/leaves/getLeavesCount/{employeeId}:
 *   get:
 *     summary: Returns LeavesCount of employee
 *     tags: [Leaves]
 *     parameters: 
 *         - in: path
 *           name: employeeId
 *           required: true
 *           description: employeeId is required
 *           schema:
 *              type: string
 * 
 *     responses:
 *       200:
 *         description: Returns LeaveCount of employee
 *         
 */
 router.get("/getLeavesCount/:employeeId",leaves.getLeavesCount);



/**
 * @swagger
 * /employee/leaves/deleteLeaveApplication/{leaveId}:
 *   delete:
 *     summary: Delete Leave Application by LeaveId
 *     tags: [Leaves]
 *     parameters:
 *         - in: path
 *           name: leaveId
 *           required: true
 *           description: leaveId is required
 *           schema:
 *              type: integer
 *     responses:
 *       200:
 *         description: Leave Application Deleted Successfully
 *   
 */
router.delete("/deleteLeaveApplication/:leaveId",leaves.deleteLeaveApplication);


module.exports = router;
const express = require("express")
const {emailSendforAdmin,changePasswordforAdmin} = require("../controller/forgotPasswordAdmin_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     admin:
 *       type: object
 *       required:
 *         - Email
 *         - Password
 *       properties:
 *         Email:
 *           type: string
 *           description: admin@gmail.com
 *         Password:
 *           type: string
 *           description: password
 *       example:
 *         Email: admin@gmail.com
 *         Password: 12345
 *         otp: 12345
 *        
 *
 */
/**
 * @swagger
 * /api/v1/emailSendforAdmin:
 *   post:
 *     summary: Email Send for forgot Password
 *     tags: [admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/admin'
 *     responses:
 *       200:
 *         description: otp send  successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/admin'
 *       500:
 *         description: Some server error
 */
router.route("/emailSendforAdmin").post(emailSendforAdmin)
/**
 * @swagger
 * /api/v1/changePasswordforAdmin:
 *   post:
 *     summary: change Password for Admin
 *     tags: [admin]
 *     properties:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/admin'
 *     responses:
 *       200:
 *         description: Password Change Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/admin'
 *       500:
 *         description: Some server error
 */
router.route("/changePasswordforAdmin").post(changePasswordforAdmin)
module.exports = router

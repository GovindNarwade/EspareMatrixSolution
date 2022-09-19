
const express = require("express")
const {createorganization,vieworganization,deleteorganizationDetails,updateorganizationDetails} = require("../controller/organization_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     organization:
 *       type: object
 *       required:
 *         - organizationId
 *         - Name
 *         - Email
 *         - Phone
 *         - About
 *       properties:
 *         organizationId:
 *           type: Number
 *           description: uniqueid
 *         Name:
 *           type: String
 *           description: Name 
 *         Email:
 *        type:String
 *           description:EmailID 
 *        Phone:
 *           type:Number
 *           description: Phone 
 *       About:
 *           type:String
 *           description: About 
 * 
 * 
 *       example:
 *        organizationId: 
 *          Name  : 
 *          Email :
 *          Phone : 
 *          About :
 *        
 *
 */

/**
 * @swagger
 * /api/v1/organization/createorganization:
 *   post:
 *     summary: create a new organization
 *     tags: [organization]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/organization'
 *     responses:
 *       200:
 *         description: organization create successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/organization'
 *       500:
 *         description: Some server error
 */

router.route("/organization/createorganization").post(createorganization)



/**
 * @swagger
 * /api/v1/organization/vieworganization:
 *   get:
 *     summary: get all organization
 *     tags: [organization]
 *     responses:
 *       200:
 *         description: get All organization
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/organization'
 */
router.route("/organization/vieworganization").get(vieworganization)
// router.route("/organization/deleteorganizationDetails/:organizationId").delete(deleteorganizationDetails)
// router.route("/organization/updateorganizationDetails").put(updateorganizationDetails)

module.exports = router

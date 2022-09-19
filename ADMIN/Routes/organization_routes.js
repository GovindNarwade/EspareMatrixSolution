
const express = require("express")
const {createorganization,vieworganization,deleteorganizationDetails,updateorganizationDetails} = require("../controller/organization_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     organization:
 *       type: object 
 *        required :
 *        - organizationId
 *        - Name
 *        - Email
 *        - Phone
 *        - About 
 *       properties:
 *         organizationId:
 *           type: integer
 *           description: organizationId
 *         Name:
 *           type: string
 *           description: Name
 *         Email:
 *           type: string
 *           description: Email@gmail.com
 *         Phone:
 *           type: integer
 *           description: 78945621
 *        About:
 *           type: string
 *           description: About
 *       example:
 *        organizationId: 7894
 *          Name:abc 
 *          Email:abc@gmail.com
 *          Phone:7894651015
 *          About:asdfcxz
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
// router.route("/organization/vieworganization").get(vieworganization)
// router.route("/organization/deleteorganizationDetails/:organizationId").delete(deleteorganizationDetails)
// router.route("/organization/updateorganizationDetails").put(updateorganizationDetails)

module.exports = router

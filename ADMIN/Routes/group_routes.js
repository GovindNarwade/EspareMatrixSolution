const express = require("express")
const {CreateGroup,GetAllGroup,deleteGroupbyGroupId,updategroupDetails} = require("../controller/group_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     group:
 *       type: object
 *       required:
 *         - GroupId
 *         - GroupName
 *       properties:
 *         GroupId:
 *           type: integer
 *           description: groupid
 *         GroupName:
 *           type: string
 *           description: groupName
 *       example:
 *         GroupId: 1
 *         GroupName: admin
 *        
 *
 */
/**
 * @swagger
 * /api/v1/group/CreateGroup:
 *   post:
 *     summary: create a new group
 *     tags: [Group]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/group'
 *     responses:
 *       200:
 *         description: group create successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/group'
 *       500:
 *         description: Some server error
 */

router.route("/CreateGroup").post(CreateGroup)
/**
 * @swagger
 * /api/v1/group/GetAllGroup:
 *   get:
 *     summary: get all Group
 *     tags: [Group]
 *     responses:
 *       200:
 *         description: get All group
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/group'
 */
router.route("/GetAllGroup").get(GetAllGroup)

/**
 * @swagger
 *  /api/v1/group/deleteGroupbyGroupId/{GroupId}:
 *    delete:
 *      summary: delete group details by GroupId
 *      tags: [Group]
 *      parameters:
 *        - in: path
 *          name: GroupId
 *          description: GroupId
 *          required: true
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: The Group was deleted
 *        404:
 *          description: The Group was not found
 *
 */
router.route("/deleteGroupbyGroupId/:GroupId").delete(deleteGroupbyGroupId)

 /** 
 @swagger
*  /api/v1/group/updategroupDetails:
 *  put:
 *    tags: [Group]
 *    description: Update Group data by groupId
 *    GroupId: 
 *    produces:
 *      - application/json
 *    parameters: 
 *       schema:
 *          $ref: '#/components/schemas/group'
 *    responses:
 *      200:
 *        description: updsate group Success
 *      400:
 *        description: group  error
 */
router.route("/updategroupDetails").put(updategroupDetails)


module.exports = router

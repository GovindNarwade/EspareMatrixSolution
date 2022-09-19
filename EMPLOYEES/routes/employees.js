const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const employee = require("../controller/empController");

//----------------------- Dash-Board Routes ------------------------------------

/**
 * @swagger
 * /employee/getAllEmployee:
 *   get:
 *     summary: Returns all employee details
 *     tags: [Employee]
 *     responses:
 *       200:
 *         description: the list of the empoyess
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 */
router.get("/getAllEmployee",employee.getAll);



//------Register Employee------

/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       required:
 *         - EmployeeId
 *         - FirstName
 *         - LastName
 *         - FatherName
 *         - ContactNumber
 *         - DateOfBirth
 *         - Gender
 *         - MaritalStatus
 *         - BloodGroup
 *         - Country
 *         - CurrentAddress
 *         - PermanantAddress
 *         - Department
 *         - Role
 *         - PanCard
 *         - EmailId
 *         - Password
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a employee
 *         EmployeeId:
 *           type: string
 *           description: The employee id 
 *         FirstName:
 *           type: string
 *           description: first name of an employee
 *         LastName:
 *           type: string
 *           descripton: last name of an employee
 *         FatherName:
 *           type: string
 *           descripton: father name of an employee 
 *         ContactNumber:
 *           type: string
 *           descripton: conatct number of an employee 
 *         DateOfBirth:
 *           type: string
 *           descripton: date of birth of an employee 
 *         Gender:
 *           type: string
 *           descripton: gender of an employee 
 *         MaritalStatus:
 *           type: string
 *           descripton: maritalstatus of an employee 
 *         BloodGroup:
 *           type: string
 *           descripton: bloodgroup of an employee 
 *         Country:
 *           type: string
 *           descripton: country of an employee 
 *         CurrentAddress:
 *           type: string
 *           descripton: current address of an employee
 *         PermanantAddress:
 *           type: string
 *           descripton: permanant address of an employee
 *         Department:
 *           type: string
 *           descripton: department of an employee
 *         Role:
 *           type: string
 *           descripton: role of an employee 
 *         PanCard:
 *           type: string
 *           descripton: pancard number of an employee 
 *         EmailId:
 *           type: string
 *           descripton: emailID of an employee 
 *         Password:
 *           type: string
 *           descripton: password of an employee 
 *       example:
 *         id: 1
 *         EmployeeId: EM-SM102
 *         FirstName: Aditya
 *         LastName: Sasane
 *         FatherName: Avinash Sasane
 *         ContactNumber: 123567890
 *         DateOfBirth: 13-11-2003
 *         Gender: Male
 *         MaritalStatus: Unmarrid
 *         BloodGroup: A+
 *         Country: India
 *         CurrentAddress: Pune
 *         PermanantAddress: Pune
 *         Department: Finance
 *         Role: Manager
 *         PanCard: zx13rt45
 *         EmailId: adityasasane555@gmail.com
 *         Password: 123456
 */

/**
 * @swagger
 * /employee/registerEmployee:
 *   post:
 *     summary: Register new employee details
 *     tags: [Employee]
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         description: new employee register successfully
 *   
 */
router.post("/registerEmployee",employee.register);




//------Update Employee---------

/**
 * @swagger
 * components:
 *   schemas:
 *     employee1:
 *       type: object
 *       required:
 *         - EmailId
 *         - FirstName
 *         - LastName
 *         - ContactNumber
 *       properties:
 *         id:
 *           type: integer
 *           description: The Database id of a employee
 *         EmailId:
 *           type: string
 *           descripton: emailID of an employee 
 *         FirstName:
 *           type: string
 *           description: first name of an employee
 *         LastName:
 *           type: string
 *           descripton: last name of an employee
 *         ContactNumber:
 *           type: string
 *           descripton: conatct number of an employee 

 *       example:
 *         id: 1
 *         EmailId: adityasasane555@gmail.com
 *         FirstName: Aditya
 *         LastName: Sasane
 *         ContactNumber: 123567890
 */

/**
 * @swagger
 * /employee/updateEmployee/{employeeId}:
 *   put:
 *     summary: Update details of an employee
 *     tags: [Employee]
 *     parameters:
 *         - in: path
 *           name: employeeId
 *           required: true
 *           description: employeeId is required
 *           schema:
 *              type: string
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/employee1'
 *     responses:
 *       200:
 *         description: details of an employee updated successfully
 * 
 */
router.put("/updateEmployee/:employeeId",employee.update);




//-------Update Profile Details---------

/**
 * @swagger
 * components:
 *   schemas:
 *     employee2:
 *       type: object
 *       required:
 *         - EmployeeId
 *         - Department
 *         - Role
 *         - JoiningDate
 *         - ConfirmDate
 *         - EmailId
 *         - ReportingTo
 *         - FirstName
 *         - MiddleName
 *         - LastName
 *         - FatherName
 *         - ContactNumber
 *         - DateOfBirth
 *         - Gender
 *         - MaritalStatus
 *         - BloodGroup
 *         - PanCard
 *         - AadharCardNumber
 *         - AadharEnrollmentNumber
 *         - BankName
 *         - BankAccountNumber
 *         - IFSCCode
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a employee
 *         EmployeeId:
 *           type: string
 *           description: The employee id 
 *         Department:
 *           type: string
 *           descripton: department of an employee
 *         Role:
 *           type: string
 *           descripton: role of an employee 
 *         JoiningDate:
 *           type: string
 *           descripton: confirm date of an employee
 *         ConfirmDate:
 *           type: string
 *           descripton: confirm date of an employee
 *         EmailId:
 *           type: string
 *           descripton: emailID of an employee 
 *         ReportingTo:
 *           type: string
 *           descripton: employee is reporting to
 *         FirstName:
 *           type: string
 *           description: first name of an employee
 *         MiddleName:
 *           type: string
 *           descripton: middle name of an employee 
 *         LastName:
 *           type: string
 *           descripton: last name of an employee
 *         FatherName:
 *           type: string
 *           descripton: father name of an employee 
 *         ContactNumber:
 *           type: string
 *           descripton: conatct number of an employee 
 *         DateOfBirth:
 *           type: string
 *           descripton: date of birth of an employee 
 *         Gender:
 *           type: string
 *           descripton: gender of an employee 
 *         MaritalStatus:
 *           type: string
 *           descripton: maritalstatus of an employee 
 *         BloodGroup:
 *           type: string
 *           descripton: bloodgroup of an employee  
 *         PanCard:
 *           type: string
 *           descripton: pancard number of an employee 
 *         AadharCardNumber:
 *           type: string
 *           descripton: aadhar card number of an employee
 *         AadharEnrollmentNumber:
 *           type: string
 *           descripton: aadhar enrollment number of an employee
 *         BankName:
 *           type: string
 *           descripton: bank name of an employee
 *         BankAccountNumber:
 *           type: string
 *           descripton: BankAccountNumber of an employee
 *         IFSCCode:
 *           type: string
 *           descripton: Bank IFSCCode of an employee
 *       example:
 *         id: 1
 *         EmployeeId: EM-SM102
 *         Department: Finance
 *         Role: Manager
 *         JoiningDate: 16-09-2022
 *         ConfirmDate: 17-09-2022
 *         EmailId: adityasasane555@gmail.com
 *         ReportingTo: Aditya Sharma
 *         FirstName: Aditya
 *         MiddleName: Avinash
 *         LastName: Sasane
 *         FatherName: Avinash
 *         ContactNumber: 123456789
 *         DateOfBirth: 13-11-2003
 *         Gender: Male
 *         MaritalStatus: Unmarid
 *         BloodGroup: A+
 *         PanCard: XBDTY45894Z
 *         AadharCardNumber: 6789-5690-3245
 *         AadharEnrollmentNumber: 6789-5690-3245
 *         BankName: AXIS Bank
 *         BankAccountNumber: 2534167890
 *         IFSCCode: AX345678
 */

/**
 * @swagger
 * /employee/updateProfileDetails/{employeeId}:
 *   put:
 *     summary: Update details of an employee
 *     tags: [Employee]
 *     parameters:
 *         - in: path
 *           name: employeeId
 *           required: true
 *           description: employeeId is required
 *           schema:
 *              type: string
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/employee2'
 *     responses:
 *       200:
 *         description: details of an employee updated successfully
 * 
 */
router.put("/updateProfileDetails/:employeeId",employee.updateProfile);




//--------Update Education Details-------

/**
 * @swagger
 * components:
 *   schemas:
 *     employee3:
 *       type: object
 *       required:
 *         - SecondarySchoolName
 *         - SecondarySchoolPassingYear
 *         - SecondarySchoolPercentage
 *         - SrSecondarySchoolName
 *         - SrSecondarySchoolPassingYear
 *         - SrSecondarySchoolPercentage
 *         - GradutionCollageName
 *         - GradutionCollagePassingYear
 *         - GradutionCollagePercentage
 *         - PostGraduationCollageName
 *         - PostGraduationCollagePassingYear
 *         - PostGraduationCollagePercentage
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a employee
 *         SecondarySchoolName:
 *           type: string
 *           description:  SecondarySchoolName of an employee
 *         SecondarySchoolPassingYear:
 *           type: string
 *           descripton: SecondarySchoolPassingYear of an employee
 *         SecondarySchoolPercentage:
 *           type: string
 *           descripton: SecondarySchoolPercentage of an employee 
 *         SrSecondarySchoolName:
 *           type: string
 *           descripton: SrSecondarySchoolName of an employee
 *         SrSecondarySchoolPassingYear:
 *           type: string
 *           descripton: SrSecondarySchoolPassingYear of an employee
 *         SrSecondarySchoolPercentage:
 *           type: string
 *           descripton: SrSecondarySchoolPercentage of an employee 
 *         GradutionCollageName:
 *           type: string
 *           descripton: GradutionCollageName of an employee 
 *         GradutionCollagePassingYear:
 *           type: string
 *           description: GradutionCollagePassingYear of an employee
 *         GradutionCollagePercentage:
 *           type: string
 *           descripton: GradutionCollagePercentage of an employee 
 *         PostGraduationCollageName:
 *           type: string
 *           descripton: PostGraduationCollageName of an employee
 *         PostGraduationCollagePassingYear:
 *           type: string
 *           descripton: PostGraduationCollagePassingYear of an employee 
 *         PostGraduationCollagePercentage:
 *           type: string
 *           descripton: PostGraduationCollagePercentage of an employee 
 *       example:
 *          id: 1
 *          SecondarySchoolName: Sadhana Vidyalya,Hadapsar
 *          SecondarySchoolPassingYear: 2015
 *          SecondarySchoolPercentage: 83%
 *          SrSecondarySchoolName: R.R.Shinde JR.Collage,Hadapsar
 *          SrSecondarySchoolPassingYear: 2017
 *          SrSecondarySchoolPercentage: 75%
 *          GradutionCollageName: COEP,PUNE
 *          GradutionCollagePassingYear: 2021
 *          GradutionCollagePercentage: 88%
 *          PostGraduationCollageName: NA
 *          PostGraduationCollagePassingYear: NA
 *          PostGraduationCollagePercentage: NA
 */

/**
 * @swagger
 * /employee/updateEducationDetails/{employeeId}:
 *   put:
 *     summary: Update details of an employee
 *     tags: [Employee]
 *     parameters:
 *         - in: path
 *           name: employeeId
 *           required: true
 *           description: employeeId is required
 *           schema:
 *              type: string
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/employee3'
 *     responses:
 *       200:
 *         description: details of an employee updated successfully
 * 
 */
router.put("/updateEducationDetails/:employeeId",employee.updateEducation);




//---------Update Experience Details------

/**
 * @swagger
 * components:
 *   schemas:
 *     employee4:
 *       type: object
 *       required:
 *         - Company1Name
 *         - Company1Designation
 *         - Company1JobJoinFrom
 *         - Company1JobTo
 *         - Company2Name
 *         - Company2Designation
 *         - Company2JobJoinFrom
 *         - Company2JobTo
 *         - Company3Name
 *         - Company3Designation
 *         - Company3JobJoinFrom
 *         - Company3JobTo
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a employee
 *         Company1Name:
 *           type: string
 *           description: The employee id 
 *         Company1Designation:
 *           type: string
 *           description: first name of an employee
 *         Company1JobJoinFrom:
 *           type: string
 *           descripton: last name of an employee
 *         Company1JobTo:
 *           type: string
 *           descripton: father name of an employee 
 *         Company2Name:
 *           type: string
 *           descripton: conatct number of an employee 
 *         Company2Designation:
 *           type: string
 *           descripton: date of birth of an employee 
 *         Company2JobJoinFrom:
 *           type: string
 *           descripton: gender of an employee 
 *         Company2JobTo:
 *           type: string
 *           descripton: maritalstatus of an employee 
 *         Company3Name:
 *           type: string
 *           descripton: bloodgroup of an employee 
 *         Company3Designation:
 *           type: string
 *           descripton: country of an employee 
 *         Company3JobJoinFrom:
 *           type: string
 *           descripton: current address of an employee
 *         Company3JobTo:
 *           type: string
 *           descripton: permanant address of an employee 
 *       example:
 *         Company1Name: Apple
 *         Company1Designation: Software Engineer
 *         Company1JobJoinFrom: 05/2015
 *         Company1JobTo: 03/2017
 *         Company2Name: Microsoft
 *         Company2Designation: Software Engineer
 *         Company2JobJoinFrom: 04/2017
 *         Company2JobTo: 08/2020
 *         Company3Name: Google
 *         Company3Designation: Software Engineer
 *         Company3JobJoinFrom: 09/2020
 *         Company3JobTo: 07/2022
 */

/**
 * @swagger
 * /employee/updateExperienceDetails/{employeeId}:
 *   put:
 *     summary: Update details of an employee
 *     tags: [Employee]
 *     parameters:
 *         - in: path
 *           name: employeeId
 *           required: true
 *           description: employeeId is required
 *           schema:
 *              type: string
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/employee4'
 *     responses:
 *       200:
 *         description: details of an employee updated successfully
 * 
 */
router.put("/updateExperienceDetails/:employeeId",employee.updateExperience);




//-------- Delete Employee--------------------

/**
 * @swagger
 * /employee/deleteEmployee/{employeeId}:
 *   delete:
 *     summary: Delete an employee
 *     tags: [Employee]
 *     parameters:
 *         - in: path
 *           name: employeeId
 *           required: true
 *           description: employeeId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: employee successfully
 *   
 */
router.delete("/deleteEmployee/:employeeId",employee.delete);





//--------------------------Leave Section Routes------------------------------

router.post("/applyForLeave/:employeeId",employee.applyForLeave);


router.get("/checkLeaveHistory/:employeeId",employee.checkLeaveHistory);

router.put("/acceptLeaveApplication/:employeeId",employee.acceptLeaveApplication);

router.put("/rejectLeaveApplication/:employeeId",employee.rejectLeaveApplication);
// router.post("/upload",upload.single("img"),employee.uploadImage);

module.exports = router;
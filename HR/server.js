const express = require('express')
const app = express()
const swaggerUI =require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc');
const env = require("dotenv")
env.config({path:"./config/.env"})
const cors =require("cors")
const db = require("./config/db")
db()
app.use(express.json())
app.use(express.static('public'));
app.use(cors())
const employeeTask = require('./Routes/employee_routes')
const Appraisal = require('./Routes/Appraisal_routes')
const travelRequest = require('./Routes/Appraisal_routes')
const TrainingSchedule = require('./Routes/TrainingSchedule_routes')
const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Espare Matrix Solution API",
        version: "1.0.0",
        description: "A simple Express Library API",
       
      },
  
      servers: [
        {
          url: "http://localhost:5000",
          description: "Espare Documentation",
        },
      ],
    },
    apis: ["./Routes/*.js"],
  };
  
  const specs = swaggerJsDoc(options);
  app.use("/api-docs-HR", swaggerUI.serve, swaggerUI.setup(specs));
  app.use("/api/v1",employeeTask)
  app.use("/api/v1",Appraisal)
  app.use("/api/v1",travelRequest)
  app.use("/api/v1",TrainingSchedule)
app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT || 4000}`))


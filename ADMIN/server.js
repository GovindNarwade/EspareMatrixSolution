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
const admin = require("./Routes/admin_routes")
const group = require("./Routes/group_routes")
const origanization = require("./Routes/organization_routes")
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
  app.use("/api-docs-Admin", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/api/v1/admin",admin)
app.use("/api/v1/group",group)
app.use("/api/v1",origanization)
app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT || 4000}`))


const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Payroll Api",
        version: "1.0.0",
        description: "All Api of Employees",
      },
  
      servers: [
        {
          url: "http://localhost:8000",
          description: "My API Documentation",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  
  const specs = swaggerJsDoc(options);

  module.exports = specs;
require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const empRoutes = require("./routes/employees");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const specs = require("./config/swagger");

const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json()); 
app.use(cors());
app.use("/employee",empRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));


app.listen(process.env.PORT || 8000,()=>{
     console.log("Server running on port 8000");
});
   
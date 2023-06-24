const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
//dotenv conig
dotenv.config();

//mongodb connection
connectDB();

//rest obejct
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));
//   app.options("/api/v1/user/register", function (req, res) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   res.end();
// });
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req,res) {
  res.sendFile(path.join(__dirname,"./client/build/index.html"));
});
//port
const port = process.env.PORT || 8000;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});

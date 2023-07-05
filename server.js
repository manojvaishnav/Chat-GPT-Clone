const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyparser = require("body-parser");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");
const path = require("path");
const fetch = require("node-fetch");

// routes path
const authRoutes = require("./routes/authRoutes");

const app = express();
dotenv.config();
const Port = process.env.PORT || 8000;

//Mongo Connection
connectDB();
// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(errorHandler);

// API Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/openai", require("./routes/openaiRoutes"));
app.use("/api/v1/openai", require("./routes/openaiRoutes"));
app.use("/api/v1/openai", require("./routes/openaiRoutes"));
app.use("/api/v1/openai", require("./routes/openaiRoutes"));
app.use("/api/v1/openai", require("./routes/openaiRoutes"));

// Static File
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Listen Server
app.listen(Port, () => {
  console.log(
    `server started in ${process.env.DEV_MODE} mode at port ${Port}`.bgCyan
      .white
  );
});

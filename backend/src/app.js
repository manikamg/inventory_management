const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const ApiError = require("./utils/ApiError");
const ErrorHandling = require("./middleware/ErrorHandler");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/", require("./routes/index"))

app.use("*", (req, res) => {
    throw new ApiError( 404, "Page not found" )
})

app.use(ErrorHandling)

module.exports = app;

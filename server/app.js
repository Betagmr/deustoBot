const express = require("express");
const app = express();
const cors = require("cors");

const config = require("./utils/config");
const logger = require("./utils/logger");
const middleware = require("./utils/middleware");
const mongoose = require("mongoose");

const helpRouter = require("./routes/helpRouter");
const reminderRouter = require("./routes/reminderRouter");
const coinRouter = require("./routes/coinRouter");

// Database conection
mongoose
    .connect(config.MONGODB_URI)
    .then(() => logger.info("Connected to MongoDB"))
    .catch((err) => logger.error("Error conecting to MongoDB: " + err.message));

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/", helpRouter);
app.use(config.ROUTES.remainder_url, reminderRouter);
app.use(config.ROUTES.coin_url, coinRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;

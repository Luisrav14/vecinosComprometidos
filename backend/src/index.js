const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/router");

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log("[express] Server running on port:", app.get("port"));
});

app.use("/", router);

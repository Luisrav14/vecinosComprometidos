const express = require("express");
const cors = require("cors");

require("./database/connection");

const app = express();

app.use(cors());
app.use("/", require("./routes/router"));

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log("[express] Server running on port:", app.get("port"));
});

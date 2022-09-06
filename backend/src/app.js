import cors from "cors";
import morgan from "morgan";
import express from "express";
import * as dotenv from "dotenv";

import routes from "./routes/routes";

const app = express();

// Config
app.set("port", 5000);
app.use(cors());
dotenv.config({ path: "../.env" });

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use(routes);

export default app;

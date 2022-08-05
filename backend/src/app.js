import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/routes";

const app = express();

// Config
app.set("port", 5001);
app.use(cors());

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use(routes);

export default app;

// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import investmentRoutes from "./routes/investment.js";
import profitRoutes from "./routes/profits.js";

dotenv.config();
connectDB();

const app = express();
     app.use(
       cors()
     );

app.use(express.json());
app.use("/api/investment", investmentRoutes);
app.use("/api/profits", profitRoutes);

export default app;

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
       cors({
         origin: [
           "https://profit-tracker-frontend-blue.vercel.app",
           "http://localhost:5173",
         ],
       })
     );
app.use(express.json());

app.use("/api/investment", investmentRoutes);
app.use("/api/profits", profitRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

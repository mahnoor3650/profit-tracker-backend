// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import investmentRoutes from "./routes/investment.js";
import profitRoutes from "./routes/profits.js";

dotenv.config();
const port = process.env.PORT || 5000;
connectDB();

const app = express();
app.use(express.json());
     app.use(
       cors()
     );


app.use("/api/investment", investmentRoutes);
app.use("/api/profits", profitRoutes);
app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => console.log("Server started ", port));

import express from "express";
import {
  getInvestment,
  setInvestment,
} from "../controllers/investmentController.js";

const router = express.Router();

router.get("/", getInvestment);
router.post("/", setInvestment);

export default router;

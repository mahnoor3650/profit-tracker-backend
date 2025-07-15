import express from "express";
import {
  getProfits,
  addProfit,
  deleteProfit,
} from "../controllers/profitsController.js";

const router = express.Router();

router.get("/", getProfits);
router.post("/", addProfit);
router.post("/withdrawal", (req, res, next) => {
  req.body.type = "withdrawal";
  addProfit(req, res, next);
});
router.delete("/:id", deleteProfit);

export default router;

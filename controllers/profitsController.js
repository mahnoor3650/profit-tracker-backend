import { ProfitRecord } from "../models/ProfitRecord.js";

export const getProfits = async (req, res) => {
  try {
    const profits = await ProfitRecord.find().sort({ date: -1 });
    res.json(profits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addProfit = async (req, res) => {
  try {
    let { amount, date, type, balanceBefore, balanceAfter } = req.body;
    // If type is not provided, infer from amount
    if (!type) {
      if (amount < 0) type = "loss";
      else type = "profit";
    }
    const profit = new ProfitRecord({ amount, date, type, balanceBefore, balanceAfter });
    await profit.save();
    res.json(profit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteProfit = async (req, res) => {
  try {
    await ProfitRecord.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

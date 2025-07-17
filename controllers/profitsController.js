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

export const deleteLatestRecord = async (req, res) => {
  try {
    const { type } = req.params;
    const latestRecord = await ProfitRecord.findOne({ type }).sort({ createdAt: -1 });
    
    if (!latestRecord) {
      return res.status(404).json({ error: "No record found to delete" });
    }
    
    await ProfitRecord.findByIdAndDelete(latestRecord._id);
    res.json({ 
      message: "Latest record deleted successfully",
      deletedRecord: latestRecord
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

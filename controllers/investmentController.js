import { Investment } from "../models/Investment.js";

export const getInvestment = async (req, res) => {
  try {
    const investment = await Investment.findOne();
    res.json(investment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const setInvestment = async (req, res) => {
  try {
    // Use upsert to update or create the investment
    const investment = await Investment.findOneAndUpdate(
      {},
      { amount: req.body.amount },
      { new: true, upsert: true }
    );
    res.json(investment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

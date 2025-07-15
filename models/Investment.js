import mongoose from "mongoose";

const investmentSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Investment = mongoose.model("Investment", investmentSchema);

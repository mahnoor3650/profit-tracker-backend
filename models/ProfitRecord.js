import mongoose from "mongoose";

const profitSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  type: { type: String, enum: ["profit", "loss", "withdrawal"], required: true },
  balanceBefore: { type: Number },
  balanceAfter: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

export const ProfitRecord = mongoose.model("ProfitRecord", profitSchema);

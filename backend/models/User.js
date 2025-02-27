import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  counter: { type: Number, default: 0 },
  bonusPoints: { type: Number, default: 0 },
  prizesWon: { type: Number, default: 0 }
});

export const User = mongoose.model('User', userSchema);

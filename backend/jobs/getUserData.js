import { User } from '../models/User.js';

export const getUserData = async (req, res) => {
  try {
    let user = await User.findOne();
    if (!user) user = new User();
    res.json({ counter: user.counter, bonusPoints: user.bonusPoints, prizesWon: user.prizesWon });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

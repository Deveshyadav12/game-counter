import { User } from '../models/User.js';

export const updateCounter = async (req, res) => {
  try {
    let user = await User.findOne();
    if (!user) user = new User();
    
    user.counter += 1;
    
    let message = 'Counter updated';
    if (Math.random() < 0.5) {
      user.bonusPoints += 10;
      message = 'Bonus points awarded!';
    }
    if (Math.random() < 0.25) {
      user.prizesWon += 1;
      message = 'You won a prize!';
    }

    await user.save();
    res.json({ counter: user.counter, bonusPoints: user.bonusPoints, prizesWon: user.prizesWon, message });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

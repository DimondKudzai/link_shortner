
// user controll
const User = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.create({ email });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error creating user' });
  }
};

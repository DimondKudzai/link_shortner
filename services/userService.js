
const User = require('../models/user');

exports.createUser = async (email) => {
  const user = await User.create({ email });
  return user;
};

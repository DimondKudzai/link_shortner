
const Link = require('../models/link');
const validateUrl = require('../utils/validateUrl');

exports.createLink = async (originalUrl) => {
  if (!validateUrl(originalUrl)) {
    throw new Error('Invalid URL');
  }
  const shortCode = generateCode();
  const link = await Link.create({ originalUrl, shortCode });
  return link;
};

exports.getLink = async (shortCode) => {
  const link = await Link.findOne({ where: { shortCode } });
  if (!link) {
    throw new Error('Link not found');
  }
  return link;
};

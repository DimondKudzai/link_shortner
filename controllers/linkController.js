// link controll

const Link = require('../models/link');
const generateCode = require('../utils/generateCode');

exports.createLink = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const shortCode = generateCode();
    const link = await Link.create({ originalUrl, shortCode });
    res.json(link);
  } catch (err) {
    res.status(500).json({ message: 'Error creating link' });
  }
};

exports.getLink = async (req, res) => {
  try {
    const { shortCode } = req.params;
    const link = await Link.findOne({ where: { shortCode } });
    if (!link) {
      res.status(404).json({ message: 'Link not found' });
    } else {
      res.json(link);
    }
  } catch (err) {
    res.status(500).json({ message: 'Error getting link' });
  }
};
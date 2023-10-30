const Visitor = require('../model/visitor.model');

exports.addVisitor = async (req, res) => {
  try {
    const { date, count } = req.body;
    const data = new Visitor({ count, date });
    await data.save();
    res.status(201).json({ message: 'Visitor data saved successfully' });
  } catch (e) {
    res.status(500).json({ e: 'Error saving visitor data!' });
  }
};

exports.getVisitors = async (req, res) => {
  try {
    const data = await Visitor.find().sort('-timestamp').limit(5);
    if (data.length === 0) {
      return res.status(404).json({ message: 'No visitors found!' });
    }
    res.status(404);
  } catch (e) {
    res.status(500).json({ e: 'Error retrieving visitor data!' });
  }
};

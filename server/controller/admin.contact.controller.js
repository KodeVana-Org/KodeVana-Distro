const Contact = require('../model/contact.model.js');

// Get all contacts
exports.getAllContactList = async (req, res) => {
  try {
    const data = await Contact.find({});
    console.log('All contacts retrieved');
    res.status(200).json(data);
  } catch (e) {
    console.log('Error retrieving contact data: ', e);
    res.status(500).json({ error: 'Internal Server Error!' });
  }
};

// Delete contacts
exports.deleteContactData = async (req, res) => {
  try {
    const { name } = req.body;
    const data = await Contact.findOne({ name });
    if (!data) {
      return res.status(404).json({ message: 'No contacts found!' })
    }
    await Contact.deleteOne({ name });
    res.json({ success: true, message: "Contact deleted successfully." });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Error deleting contact: ", e,
    });
  }
};

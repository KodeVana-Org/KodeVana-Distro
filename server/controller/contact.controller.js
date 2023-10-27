const Contact = require("../model/contact.model");

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, message, attachment } = req.body;
    // Check if required fields are provided
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Please provide all required fields!.",
        });
    }
    let attachmentUrl = undefined;
    if (attachment) {
      attachmentUrl = await cloudinary.uploader.upload(attachment, {
        folder: 'contact'
      });
    }
    const newContact = new Contact({
      name,
      email,
      message,
      attachmentUrl,
    });
    const contact = await newContact.save();
    res.status(201).json({
      success: true,
      message: 'Contact form submited succesfully',
      contact,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: 'Error submitting contact form!',
      error: e.message,
    });
  }
};

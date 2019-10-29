const contact = require("express").Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.SENDER_EMAIL_ADDRESS,
    pass: process.env.SENDER_EMAIL_ADDRESS_PASSWORD
  }
});

contact.post("*", (req, res) => {
  console.log(req.body);
  var mailOptions = {
    from: process.env.SENDER_EMAIL_ADDRESS,
    to: process.env.RECEIVER_EMAIL_ADDRESS,
    subject: `Message for you from ${req.body.name}`,
    text: req.body.message
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      return res.send(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  return res.send('Success');
});

module.exports = contact;
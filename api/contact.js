const contact = require("express").Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.SENDER_EMAIL_ADDRESS,
    pass: process.env.SENDER_EMAIL_ADDRESS_PASSWORD
  }
});

contact.post("*", (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({message: "Name required."});
  };
  if (!req.body.email) {
    return res.status(400).send({message: "Email required."});
  };
  if (!req.body.message) {
    return res.status(400).send({message: "Message required."});
  };

  const mailOptions = {
    from: process.env.SENDER_EMAIL_ADDRESS,
    to: process.env.RECEIVER_EMAIL_ADDRESS,
    subject: `Message for you from ${req.body.name}`,
    text: req.body.message
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      return res.status(500).json(`Error sending email. Error ${error}`);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  return res.send("Email sent successfully");
});

module.exports = contact;
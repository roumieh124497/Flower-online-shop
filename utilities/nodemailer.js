const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const sendEmail = (to, token) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 587,
    secure: false,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_EMAIL_PASSWORD,
    },
  });

  const emailText = `<h1>please reset your password via the link below</h1><br/><br/> this is the link -> www.hiscnetflower.com/reset-password/${token}`;

  let mailOptions = {
    from: process.env.MY_EMAIL,
    to: to,
    subject: 'Reset password',
    text: 'Hello How are you?',
    html: emailText,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) console.log(err);
    else console.log('Email sent!!');
  });
};

module.exports = sendEmail;

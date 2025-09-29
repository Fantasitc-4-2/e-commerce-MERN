const sendEmail = require("../utils/email");
const crypto = require("crypto");

exports.sendOtpEmail = async (to, otp) => {
  const subject = "Your OTP Code";
  const text = `Your OTP is: ${otp}. It is valid for 10 minutes.`;
  const html = `<h2>Your OTP Code</h2><p><b>${otp}</b></p><p>It is valid for 10 minutes.</p>`;

  await sendEmail(to, subject, text, html);
};


 exports.generateOtp= ()=> {
  return crypto.randomInt(100000, 999999).toString();
}
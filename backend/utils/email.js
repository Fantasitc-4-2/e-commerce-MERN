const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (to, subject, text, html) => {
  try {
    const msg = {
      to,
      from: process.env.FROM_EMAIL,
      subject,
      text,
      html,
    };
    // console.log(msg.from)
    await sgMail.send(msg);
    console.log("✅ Email sent successfully to", to);
  } catch (err) {
    console.error("❌ Error sending email:", err.message);
  }
};

module.exports = sendEmail;

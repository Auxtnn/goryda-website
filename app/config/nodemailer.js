import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  secure: true,
  port: 465,
  auth: {
    user: "support@goryda.com",
    pass: "snuB1jACqeqz",
  },
});

export const mailOptions = {
  from: "support@goryda.com",
  to: "support@goryda.com",
};

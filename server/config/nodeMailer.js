import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

// console.log('Creating transporter with:', {
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   user: process.env.SMTP_USER,
// });

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_PORT == 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export default transporter;

import { FormType } from "@/components/contact/Form";
import nodemailer from "nodemailer";
const transpoter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail({ title, body, from }: FormType) {
  const mailData = {
    to: process.env.EMAIL_USER,
    subject: `[blog] ${title}`,
    from,
    html: `
    <h1>${title}</h1>
    <div>${body}</div>
    <br/>
    <p>보낸사람: ${from}</p>
    `,
  };

  return transpoter.sendMail(mailData);
}

import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendInterestMail(to: string, name: string) {
  await transporter.sendMail({
    from: `"Mental Health Compass" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Thank you for expressing interest",
    text: `Hi ${name},

Thank you for expressing interest.
We’ve received your request and will get back to you as soon as a slot becomes available.

Warm regards,
Mental Health Compass`,
  });
}

export async function sendAdminNotification(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  await transporter.sendMail({
    from: `"Mental Health Compass" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // admin email
    subject: "New Interest Submitted",
    text: `
New interest received:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}
`,
  });
}

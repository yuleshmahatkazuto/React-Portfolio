import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, message } = await request.json();
  console.log(process.env.EMAIL_USER, process.env.EMAIL_PASSWORD);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact form submission fro m ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:${message}`,
  };

  await transporter.sendMail(mailOptions);

  return Response.json({ success: true });
}

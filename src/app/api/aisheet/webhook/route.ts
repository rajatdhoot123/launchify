// app/api/send-email/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const data = await request.json();

  // Configure your SMTP transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST, // Replace with your SMTP server
    port: process.env.EMAIL_SERVER_PORT, // Usually 587 for TLS
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER, // Replace with your email
      pass: process.env.EMAIL_SERVER_PASSWORD, // Replace with your email password
    },
  });

  // Format the email content
  const emailContent = data
    .map(
      (update) => `
    Column: ${Object.keys(update)[0]},
    Value: ${Object.values(update)[0]},
    Cell Address: ${update.cellAddress},
    Sheet ID: ${update.sheetId}
  `
    )
    .join("\n\n");

  // Compose the email
  const mailOptions = {
    from: '"Kwiktwik" <hello.kwiktwik@gmail.com>', // Replace with your name and email
    to: "rajatdhoot123@gmail.com", // Replace with the recipient's email
    subject: "Google Sheets Update Notification",
    text: `The following updates were made in the Google Sheet:\n\n${emailContent}`,
  };

  try {
    await transporter.verify();
    console.log("Server is ready to take our messages");
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    });
  }
}

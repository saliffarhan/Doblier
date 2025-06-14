import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, category, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, 
      pass: process.env.GMAIL_PASS, 
    },
  });

   const messageHTML = `
    <p><strong>Full Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Category:</strong> ${category}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `New Contact from ${name} Mail to Doblier - [${category}]`,
      html: messageHTML,
    });

    return NextResponse.json({ success: true  });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false  },
      { status: 500 }
    );
  }
}

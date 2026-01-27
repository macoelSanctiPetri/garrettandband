import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpSecure = process.env.SMTP_SECURE
  ? process.env.SMTP_SECURE === 'true'
  : smtpPort === 465;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpSecure,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, type, message, honeypot } = await req.json();

    if (honeypot) return NextResponse.json({ ok: true });

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Faltan campos' }, { status: 400 });
    }

    const body = `
Nombre: ${name}
Email: ${email}
Tipo: ${type || 'General'}

Mensaje:
${message}
`.trim();

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `Contacto web - ${type || 'General'}`,
      text: body,
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Hemos recibido tu mensaje',
      text: [
        `Hola ${name},`,
        '',
        'Hemos recibido tu mensaje correctamente.',
        'Te responderemos lo antes posible.',
        '',
        'Este correo es automático, por favor no respondas a este mensaje.',
        '',
        'Gracias,',
        'Garrett&Band',
      ].join('\n'),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Error enviando contacto:', err);
    return NextResponse.json({ ok: false, error: 'No se pudo enviar' }, { status: 500 });
  }
}

// api/sendEmail.js

import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { nome, email, content } = req.body;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'joao@gmail.com',
    from: 'your-email@gmail.com', // Update with your verified sender email
    subject: 'New Contact Form Submission',
    text: `Name: ${nome}\nEmail: ${email}\nMessage: ${content}`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error sending email' });
  }
}

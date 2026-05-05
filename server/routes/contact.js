const express = require('express');
const resendApi = require('resend');

const resend = new resendApi.Resend(process.env.RESEND_API_KEY);
const router = express.Router();

router.post('/contact', async (req, res) => {
  console.log(req.body);

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Both Name and Email are required.' });
  }

  const { error } = await resend.emails.send({
    from: 'Contact <noreply@cs5500.com>',
    to: email,
    subject: 'Thank You For Contacting Us',
    html: `
      <h2> Thank You For Contacting Us </h2>
      <p>We have received your message ${name} and will get back to you as soon as we can.</p>
          `,
  });

  if (error) {
    return res.status(400).json({ error: 'Failed to send message' });
  }

  res.json({ success: true });
});

module.exports = router;

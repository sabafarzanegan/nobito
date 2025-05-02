// import nodemailer from 'nodemailer';

// export const mailer = nodemailer.createTransport({
//   host: 'smtp.resend.com',
//   port: 587,
//   auth: {
//     user: 'resend',
//     pass: process.env.RESEND_API_KEY,
//   },
// });

import { Resend } from 'resend';

export const resend = new Resend('re_BAM63dfH_2sz17HQ3emySDAZ3oREwq8e7');

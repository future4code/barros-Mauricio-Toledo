const nodemailer = require('nodemailer');
const SMTP_CONFIG = require('../info/postNodeMailer');

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass,
    },
    tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
    },
});

async function postNodemailer () {
    const mailSend = await transporter.sendMail({
        from: "Mauricio-Toledo <aileen.schinner9@ethereal.email>",
        to: ["projetos_jbl-aaaaiax6fosqmlb2s7ipkez3d4@labenualunos.slack.com"],
        subject: "[BARROS - Mauricio Toledo]",
        text: "Exercicio enviado com atraso /email"
    })
    console.log(mailSend);
    return mailSend;
};
export default postNodemailer;


import nodemailer from "nodemailer";
import fs from "fs";

const template = fs.readFile("/html/mailTamplate.html", { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
    }
});

export const mailMiddleware = (req, res, next) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: req.body.email,
        subject: 'Welcome to Our Service',
        html: template
    }

    (async () => { 
        try {
            const info = await transporter.sendMail(mailOptions);
            console.log("Email sent: " + info.response);
        } catch (error) {
            console.log("Error sending email: ", error);
            res.render("404");
        }
    })();
    
    next();
}
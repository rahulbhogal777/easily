import nodemailer from "nodemailer";
import fs from "fs";

const template = fs.readFileSync("public/html/mailTemplate.html", {
  encoding: "utf-8",
});

export const mailMiddleware = (req, res, next) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rahulbhogal77@gmail.com",
        pass: "dsqj cprc awgj zajm",
      },
    });

    const mailOptions = {
      from: "rahulbhogal77@gmail.com",
      to: req.body.email,
      subject: "Welcome to Our Service",
      html: template,
    };
    const info = transporter.sendMail(mailOptions);
    console.log("Email sent: " + req.body.email);
    next();
  } catch (error) {
    console.log("Error sending email: ", error);
    res.render("404");
  }
};

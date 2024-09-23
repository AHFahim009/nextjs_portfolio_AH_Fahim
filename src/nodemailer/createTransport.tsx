import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: "ahfba009@gmail.com", // Use environment variables for sensitive data
    pass: "cebm gqfu mehz psxl",
  },
});
export default transporter;

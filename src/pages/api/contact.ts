import transporter from "@/nodemailer/createTransport";
import { generateEmailTemplate } from "@/nodemailer/emailTemplate";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handleContact(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { name, email, message } = req.body;

    try {
        // Send mail with defined transport object
        await transporter.sendMail({
            from: `"${name}" <${email}>`, // sender address
            to: "ahfba009@gmail.com", // your email address
            subject: `portfolio message from ${name}`, // Subject line
            text: message, // plain text body
            html: generateEmailTemplate({ name, email, message }),
        });
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Error sending email" });
    }
}

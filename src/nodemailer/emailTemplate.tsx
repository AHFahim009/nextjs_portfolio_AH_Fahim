export const generateEmailTemplate = ({ name, email, message }: any) => {
  return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              padding: 20px;
              color: #333;
            }
            .container {
              background-color: #ffffff;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #333;
            }
            .info {
              margin-bottom: 20px;
            }
            .footer {
              margin-top: 20px;
              font-size: 0.9em;
              color: #777;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>New Contact Form Portfolio</h1>
            <div class="info">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            </div>
            <div class="footer">
              <p>This email was sent automatically. Please do not reply.</p>
            </div>
          </div>
        </body>
      </html>
    `;
};

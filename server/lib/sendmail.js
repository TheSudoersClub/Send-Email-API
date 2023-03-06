// Import the nodemailer library to send emails with Node.js
const nodemailer = require("nodemailer");

// Define an async function that sends an email to a specified email address with a given message
async function sendmail(emailData) {

    // Create a transporter object with the email service provider (in this case, Gmail), the port number to be used (587), and the authentication details (the email address and password are obtained from environment variables)
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: emailData.SENDERS_EMAIL, // email address obtained from the client
            pass: emailData.APP_PASSWORD // password obtained from the client
        }
    });

    // Define the options for the email to be sent, including the recipient's email address, subject line, and message body
    let mailOptions = {
        from: `${emailData.SENDERS_NAME} <${emailData.SENDERS_EMAIL}>`, // sender's name
        to: emailData.RECEIVERS_EMAIL, // recipient's email address
        subject: emailData.SUBJECT, // subject line
        text: emailData.MESSAGE_BODY, // message body
    };

    try {
        // Attempt to send the email using the transporter object and the mail options
        let info = await transporter.sendMail(mailOptions);
        // return true, and message id if the email is successfully sent
        return {
            status: true,
            message: `Message sent: ${info.messageId}`
        };

    } catch (error) {
        // return false, and error message if the email is not sent
        return {
            status: false,
            message: error
        };
    }
}

// Export the sendmail function for use in other modules
module.exports = sendmail;
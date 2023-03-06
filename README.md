# Send Email API

This API allows you to send an email to a specified recipient using a specified email address and password.

## Base URL

[https://send-email-api.onrender.com](https://send-email-api.onrender.com)

## Endpoint
`POST /sendmail`

## Request Parameters

### The following parameters are required in the request body:

**SENDERS_EMAIL**: The email address to be used to send the email.\
**SENDERS_NAME**: The name of the sender.\
**APP_PASSWORD*: The password for the email address to be used to send the email.\
**RECEIVERS_EMAIL**: The email address of the recipient.\
**SUBJECT**: The subject of the email.\
**MESSAGE_BODY**: The body of the email.

## Example Request

```javascript
POST /sendmail
Content-Type: application/json

{
  "SENDERS_EMAIL": "your-name@gmail.com",
  "SENDERS_NAME": "your-name",
  "APP_PASSWORD": "your-app-passwrod",
  "RECEIVERS_EMAIL": "senders-name@gmail.com",
  "SUBJECT": "TSC-API",
  "MESSAGE_BODY": "Hello, this is an email from the sent Send-Email-API"
}

```

## Example Response

A successful response will return a JSON object with the following properties:\

**status**: A boolean indicating whether the email was successfully sent.\
**message**: A string containing a success or error message.\

```json
{
  "status": true,
  "message": "Message sent: <any-id@id.gmail.com>"
}

```

## Error Response

If an error occurs while sending the email, the API will return a JSON object with the following properties\

**status***: A boolean indicating whether the email was successfully sent.\
**message**: A string containing an error message.

```json
{
  "status": false,
  "message": "Error: Invalid login: Username and Password not accepted."
}

```

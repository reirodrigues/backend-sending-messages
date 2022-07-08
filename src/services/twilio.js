import twilio from 'twilio';

const accountsid = process.env.TWILIO_ACCOUNT_TWILIO
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilioPhoneNumber = process.env.TWILIO_NUMBER
const twilioClient = twilio(accountsid, authToken)

function sendMessage(message, phoneNumber) {
  return twilioClient.messages.create({
    body: message,
    from: twilioPhoneNumber,
    to: phoneNumber
  })
}

export { sendMessage }

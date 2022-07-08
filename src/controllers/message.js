import * as MessageServices from '../services/twilio.js'

async function message(request, response) {
  const { message, phoneNumber } = request.body
  try {
    const responseMessage = await MessageServices.sendMessage(
      message,
      phoneNumber
    )
    response.send(responseMessage)
  } catch (error) {
    response.status(error.status).send(error)
  }
}

export { message }

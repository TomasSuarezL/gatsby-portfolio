'use strict'

var CONTACT_ADDRESS = 'tomas.sl@hotmail.com'
//var bodyParser = require('body-parser')

var mailer = require('nodemailer').createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  },
})

module.exports.contact = (event, context, callback) => {
  var body = JSON.parse(event.body)
  mailer.sendMail(
    {
      from: body.from,
      to: CONTACT_ADDRESS,
      subject: body.subject || 'No subject',
      html: body.message || 'No message',
    },
    function(err, info) {
      if (err) return callback(err)
      callback(null, { statusCode: 200, body: JSON.stringify({ message: 'Success!', body: event.body }) })
    }
  )
}

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}

const sgMail = require('@sendgrid/mail')

const sendgrid_api_key = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgrid_api_key)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'benjaminhuanghuang@gmail.com',
        subject: 'Thanks for joining in! [task-rest-api]',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'benjaminhuanghuang@gmail.com',
        subject: 'Sorry to see you go [task-rest-api]!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
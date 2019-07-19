const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
   sgMail.send({
       to: email,
       from: 'kalital@outlook.com',
       subject: 'Thank for joining in !',
       text: `Welcome to app, ${name}. Let me know how you get along with the app. `
   })
}

const sendCancleEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kalital@outlook.com',
        subject: 'GoodBye',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancleEmail
}
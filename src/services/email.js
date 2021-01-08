import emailjs from 'emailjs-com'
import { init } from 'emailjs-com'
init(process.env.REACT_APP_EMAILJS_USER)

export const sendMail = (name, email, message) => {
  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE,
      process.env.REACT_APP_EMAILJS_TEMPLATE,
      {
        from_name: name,
        to_name: 'Andrea Crego',
        message: message,
        reply_to: email,
      }
    )
    .then(
      (response) => {
        return response
      },
      (err) => {
        console.log('err', err)
        return err
      }
    )
}

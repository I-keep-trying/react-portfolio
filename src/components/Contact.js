import React, { useState } from 'react'
import {
  Button,
  Form,
  Modal,
  Icon,
  Segment,
  Header,
  Input,
  TextArea,
} from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import Notes from './Notes'
import { sendMail } from '../services/email'
import Isemail from 'isemail'
import Email from 'react-email-autocomplete'
import logo from '../A-logo-gray2.svg'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [response, setResponse] = useState('')
  const [value, setValue] = useState(1000)

  const { register, errors } = useForm()

  const handleOpen = () => {
    setModalOpen(true)
    setTimeout(() => {
      setModalOpen(false)
    }, 3000)
  }

  const handleClose = () => {
    setModalOpen(false)
  }

  const onNameInputChange = (event) => {
    setName(event.target.value)
  }

  const onEmailInputChange = (event) => {
    const valEmail = Isemail.validate(event.target.value)
    if (valEmail === false) {
      setResponse('Invalid email')
    }
    setEmail(event.target.value)
  }

  const onMessageInputChange = (event) => {
    setValue(1000 - event.target.value.length)
    setMessage(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('useForm error', errors)
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      console.log('name, email, or message missing')
      setResponse('Please enter required fields.')
      return
    } else {
      sendMail(name, email, message)
      setResponse(
        'Thank You for your message. I will get back to you as soon as possible.'
      )
      setName('')
      setEmail('')
      setMessage('')
    }
  }

  const customDomains = [
    '',
    'yahoo.com',
    'hotmail.com',
    'gmail.com',
    'me.com',
    'aol.com',
    'mac.com',
    'live.com',
    'googlemail.com',
    'msn.com',
    'facebook.com',
    'verizon.net',
    'outlook.com',
    'icloud.com',
    'rediffmail.com',
    'zohomail.in',
    'zoho.com',
    'mail.com',
    'protonmail.com',
    'yandex.com',
  ]

  return (
    <div>
      <Form>
        <Header>Contact Me</Header>
        <Form.Field
          required
          control={Input}
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={onNameInputChange}
          ref={register({ required: 'This field is required' })}
        />
        <Form.Field
          required
          label="Email"
          control={Email}
          type="text"
          name="email"
          value={email}
          onChange={onEmailInputChange}
          domains={customDomains}
        />

        <Form.Field
          required
          label="Message"
          control={TextArea}
          maxLength="1000"
          placeholder="Say something"
          name="message"
          value={message}
          rows="5"
          onChange={onMessageInputChange}
          ref={register({ maxLength: 1000 })}
        />
        <p>
          {value} <i>characters remaining</i>{' '}
        </p>

        <Modal
          basic
          onClose={handleClose}
          onOpen={handleOpen}
          open={modalOpen}
          trigger={
            <Button color="teal" size="large" onClick={handleSubmit}>
              Submit
            </Button>
          }
          content={
            response.length === 0 ? (
              <Icon loading name="spinner" />
            ) : (
              <div className="home-icons">{response} </div>
            )
          }
        />
      </Form>
      <Segment>
        <div className="icons">
          <a
            href="https://github.com/I-keep-trying"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Icon name="github" size="huge" />
              <span>I-keep-trying</span>
            </div>
          </a>
          <a
            href="https://twitter.com/Andrea_Crego"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Icon name="twitter" size="huge" />
              <span>@Andrea_Crego</span>
            </div>
          </a>
        </div>
        <Notes />
      </Segment>
    </div>
  )
}

export default Contact

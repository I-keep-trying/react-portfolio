/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react'
import {
  Box,
  Heading,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  Textarea,
  Button,
  ButtonGroup,
  Flex,
  List,
  ListItem,
  ListIcon,
  useToast,
  Stack,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
} from '@chakra-ui/react'
//import { useForm } from 'react-hook-form'
import { sendMail, customDomains } from '../services/email'
import Isemail from 'isemail'
import Email from 'react-email-autocomplete'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [notify, setNotify] = useState({ title: '', msg: '' })
  const [value, setValue] = useState(1000)
  const [valid, setValid] = useState(true)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const onEmailInputChange = (event) => {
    const valEmail = Isemail.validate(event.target.value, { minDomainAtoms: 2 })

    setValid(valEmail) //minDomainAtoms
    setEmail(event.target.value)
  }

  const onMessageInputChange = (event) => {
    setValue(1000 - event.target.value.length)
    setMessage(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      onOpen()
      setNotify({
        title: 'Form Incomplete',
        msg: 'Please provide your email address and a message.',
      })
      setTimeout(() => {
        onClose()
      }, 3000)
      return
    } else if (valid === false) {
      onOpen()
      setNotify({
        title: 'Invalid Email',
        msg: 'Please check your email address.',
      })
      setTimeout(() => {
        onClose()
      }, 3000)
    } else {
      sendMail(name, email, message)
      onOpen()
      setNotify({
        title: 'Thank You! 😁',
        msg:
          'Thank You for your message. I will get back to you as soon as possible.',
      })
      setTimeout(() => {
        onClose()
      }, 3000)
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
    <>
      <Center h="100px">
        <Heading>Contact Me</Heading>
      </Center>
      <Flex align="center"></Flex>
      <Flex width="Full" align="center" justifyContent="center">
        <Box w="90%" maxWidth="500px">
          <Box my={4} textAlign="left">
            <FormControl>
              <InputGroup>
                <InputLeftAddon children="Name" />
                <Input
                  type="text"
                  placeholder="User McUserface"
                  maxLength="30"
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                />
              </InputGroup>
            </FormControl>

            <InputGroup mt={6}>
              <InputLeftAddon children="Email" />
              <Input
                control={Email}
                onChange={onEmailInputChange}
                type="text"
                placeholder="you@yourmail.com"
                maxLength="50"
                value={email}
                domains={customDomains}
                errorBorderColor="red.300"
                isInvalid={!valid}
              />
            </InputGroup>

            <FormControl mt={6}>
              <Text mb="8px">Message:</Text>
              <Textarea
                placeholder="Tell me what you think..."
                maxLength="1000"
                value={message}
                onChange={onMessageInputChange}
              />
              <Flex>
                <Spacer />
                <Popover trigger="hover">
                  <PopoverTrigger>
                    <Box>
                      {' '}
                      <CircularProgress
                        min={0}
                        max={1000}
                        value={value}
                        size="50px"
                        thickness="4px"
                      >
                        <CircularProgressLabel>{value}</CircularProgressLabel>
                      </CircularProgress>
                    </Box>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />

                    <PopoverBody>
                      You have {value} characters remaining.
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
            </FormControl>

            <Box my={4} textAlign="left">
              <ButtonGroup spacing="6">
                <Button type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>{notify.title} </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{notify.msg} </ModalBody>
                  </ModalContent>
                </Modal>
              </ButtonGroup>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default Contact
/* 
 <FormControl>
              <InputGroup>
                <InputLeftAddon children="Name" />
                <Input
                  type="text"
                  placeholder="User McUserface"
                  maxLength="130"
                  value={name}
                  onChange={onNameInputChange}
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <InputGroup>
              <InputLeftAddon children="Email" />
                <Input
                  type="text"
                  control={Email}
                  name="email"
                  value={email}
                  onChange={onEmailInputChange}
                  domains={customDomains}
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <InputGroup>
                <InputLeftAddon children="Message" />
                <Input
                  required
                  label="Message"
                  maxLength="1000"
                  placeholder="Say something"
                  name="message"
                  value={message}
                  rows="5"
                  onChange={onMessageInputChange}
                />
              </InputGroup>
            </FormControl>

///////////////////// BUTTON ///////////////////////////////////
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
            <div>Loading...</div>
          ) : (
            <div className="home-icons">{response} </div>
          )
        }
      /> 


      ////////////////////////////// SOCIAL //////////////////////////////////

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
      </Segment>

*/
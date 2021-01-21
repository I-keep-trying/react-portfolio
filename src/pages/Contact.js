import React, { useState, useRef } from 'react'
import {
  Box,
  Heading,
  Center,
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
  Textarea,
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react'
import { sendMail, customDomains } from '../services/email'
import Isemail from 'isemail'
import Email from 'react-email-autocomplete'

/* 
use-email-autocomplete
https://codesandbox.io/s/useemailautocomplete-material-ui-j5m1x
https://codesandbox.io/s/useemailautocomplete-material-ui-forked-5shs9?file=/src/index.js:312-716

*/

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

  return (
    <>
      <Center h="100px">
        <Heading>Contact Me</Heading>
      </Center>
      <Flex width="Full" align="center" justifyContent="center">
        <Box w="90%" maxWidth="500px">
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>
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
              <Center>
                <Text mb="8px">Your email will never be shared or sold. </Text>
              </Center>
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
            </form>
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default Contact

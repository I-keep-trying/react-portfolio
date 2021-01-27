import React from 'react'
import { Heading, Center } from '@chakra-ui/react'

const Error = () => {
  return (
    <Center mt={40}>
      <Heading bgClip="text" bgGradient="linear(to-l, orange.500,#FF0080)">
        Page Not Found
      </Heading>
    </Center>
  )
}

export default Error

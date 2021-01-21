import React from 'react'
import { Center, Text } from '@chakra-ui/react'
import ReactLogo from '../../ReactSvgCli'
import ChakraLogo from '../../ChakraSvgCli'

function Footer() {
  return (
    <>
      <Center h="10px" pt="5" color="white">
        <Text fontSize="xs">Proudly made with React and Chakra</Text>
      </Center>
      <Center h="80px" color="white">
        <Text fontSize="6xl">
          <ReactLogo />
        </Text>
        <Text fontSize="4xl">
          <ChakraLogo />
        </Text>
      </Center>
    </>
  )
}

export default Footer

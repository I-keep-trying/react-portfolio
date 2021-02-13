import React from 'react'
import { Center, Text, Box, Link, useColorModeValue } from '@chakra-ui/react'
import reactLogo from '../../imgs/react-logo.png'
import chakraLogo from '../../imgs/chakra-logo.png'
//import { SiFacebook, SiTwitter, SiGithub, SiLinkedin } from 'react-icons/si'

function Footer() {
  return (
    <Box bg={useColorModeValue('white', 'gray.800')} id="footer-wrap">
      <Center h="10px" pt="5">
        <Text fontSize="xs">Proudly made with React and Chakra</Text>
      </Center>
      <Center h="80px">
        <Link
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box mr="1em" maxW="40px">
            <img src={reactLogo} alt="react logo" />
          </Box>
        </Link>
        <Link
          href="https://chakra-ui.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box maxW="40px">
            <img src={chakraLogo} alt="chakra logo" />
          </Box>
        </Link>
      </Center>
    </Box>
  )
}

export default Footer

/* 
 <div className="home-icons">
        <a
          href="https://github.com/I-keep-trying"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <a
          href="https://twitter.com/Andrea_Crego"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </div>
*/
/*  
      
      
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
      </Center> */

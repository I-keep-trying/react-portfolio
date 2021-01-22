import React from 'react'
import { Center, Text } from '@chakra-ui/react'
import ReactLogo from '../../imgs/ReactSvgCli'
import ChakraLogo from '../../imgs/ChakraSvgCli'
//import { SiFacebook, SiTwitter, SiGithub, SiLinkedin } from 'react-icons/si'

function Footer() {
  return (
    <div id="footer-wrap">
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
    </div>
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

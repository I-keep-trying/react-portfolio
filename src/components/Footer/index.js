import React from 'react'
import {
  Center,
  Text,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react'
import ReactLogo from '../../imgs/ReactSvgCli'
import ChakraLogo from '../../imgs/ChakraSvgCli'
import { SiFacebook, SiTwitter, SiGithub, SiLinkedin } from 'react-icons/si'

function Footer() {
  return (
    <>
      <footer>
        <Flex
          direction={['column', 'column', 'row']}
          w="full"
          px={6}
          align="center"
        >
          <Heading size="md">Brand</Heading>
          <Spacer />
          <Text fontSize="sm">
            Copyright &copy; {new Date().getFullYear()} Brand, Inc.
          </Text>
          <Spacer />
          <HStack spacing={1}>
            <IconButton
              aria-label="Facebook"
              icon={<SiFacebook />}
            ></IconButton>
            <IconButton aria-label="Twitter" icon={<SiTwitter />}></IconButton>
            <IconButton
              aria-label="LinkedIn"
              icon={<SiLinkedin />}
            ></IconButton>
            <IconButton aria-label="Github" icon={<SiGithub />}></IconButton>
          </HStack>
        </Flex>
      </footer>
      {/*  
      
      
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
      </Center> */}
    </>
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

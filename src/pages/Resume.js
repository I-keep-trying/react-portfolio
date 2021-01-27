import React from 'react'
import { Center, Flex, Button, Container, Heading } from '@chakra-ui/react'
import GithubIcon from '../components/Logo/GithubIcon-lg'

const Resume = () => {
  return (
    <>
      <Center h="100px">
        <Heading bgClip="text" bgGradient="linear(to-l, orange.500,#FF0080)">
          Resume
        </Heading>
      </Center>
      <Center>
        <Button
          size="large"
          as="a"
          href="https://docs.google.com/document/d/11g4Rjr6Pguz2MVFf81_A8X4rokyZMo2PGLpFBlNo-tM/preview"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </Button>
      </Center>
      <Container>
        <Flex
          height="100%"
          width="100%"
          align="center"
          justify="center"
          mt="2em"
          mb="2em"
        >
          <GithubIcon />
        </Flex>
      </Container>

     {/*  <Container>
        <Flex
          height="50%"
          width="100%"
          align="center"
          justify="center"
          mt="2em"
          mb="12em"
        >
          <iframe
            src="https://docs.google.com/document/d/11g4Rjr6Pguz2MVFf81_A8X4rokyZMo2PGLpFBlNo-tM/preview"
            title="Andrea Crego Resume"
            className="resume"
            width="50%"
            loading="lazy"
          />
        </Flex>
      </Container> */}
    </>
  )
}

export default Resume

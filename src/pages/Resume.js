import React from 'react'
import {
  Center,
  Flex,
  Button,
  Container,
} from '@chakra-ui/react'

import Footer from '../components/Footer'

const Resume = () => {
  return (
    <>
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
        <Flex width="100%" align="center" justify="center" mt="2em">
          <iframe
            src="https://docs.google.com/document/d/11g4Rjr6Pguz2MVFf81_A8X4rokyZMo2PGLpFBlNo-tM/preview"
            title="Andrea Crego Resume"
            className="resume"
            width="50%"
            loading="lazy"
          />
        </Flex>
      </Container>
      <Footer />
    </>
  )
}

export default Resume

import { Box, Heading, Image, Text, Center, Link, Flex } from '@chakra-ui/react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import words from '../imgs/crypto.png'
import healthapp from '../imgs/health.png'

const Homepage = () => {
  return (
    <>
      <Center h="100px">
        <Heading variant="with-gradient">Apps</Heading>
      </Center>

      <Flex width="Full" align="center" justifyContent="center">
        <Link href="https://pure-bastion-10905.herokuapp.com/" isExternal>
          <Image
            h={56}
            objectFit="cover"
            objectPosition="center"
            rounded="lg"
            src={words}
            alt="search app"
          />
          <Center h="50px" w="200px">
            <Heading as="h3" size="md">
              Word Search
            </Heading>
            <FaExternalLinkAlt />
          </Center>
          <Box id="header-item" align="center" p={4}>
            <Text fontSize="sm">For cryptogram and crossword puzzles.</Text>
          </Box>
        </Link>
        <Link href="https://damp-journey-91890.herokuapp.com/" isExternal>
          <Image
            w={56}
            objectFit="cover"
            objectPosition="center"
            rounded="lg"
            src={healthapp}
            alt="health app"
          />
          <Center h="50px" w="200px">
            <Heading as="h3" size="md">
              Health App
            </Heading>
            <FaExternalLinkAlt />
          </Center>
          <Box id="header-item" align="center" p={4}>
            <Text fontSize="sm">Collect patient health data for reporting etc.</Text>
          </Box>
        </Link>
      </Flex>
    </>
  )
}

export default Homepage

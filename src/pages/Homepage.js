import { Box, Heading, Image, VStack, Text, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import words from '../imgs/crypto.png'

const Homepage = () => {
  return (
    <>
      <Center h="100px">
        <Heading bgClip="text" bgGradient="linear(to-l, orange.500,#FF0080)">
          Apps
        </Heading>
      </Center>
      <article>
        <VStack
          maxW="xs"
          align="center"
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          mx="auto"
        >
          <Link to="/wordsearch">
            <Image
              h={56}
              w="full"
              objectFit="cover"
              objectPosition="center"
              rounded="lg"
              shadow="lg"
              src={words}
              alt="avatar"
            />
            <Box id="header-item" align="center" p={4}>
              <Heading as="h3" size="md">
                Word Search
              </Heading>
              <Text fontSize="sm">For cryptogram and crossword puzzles.</Text>
            </Box>
          </Link>
        </VStack>
      </article>
    </>
  )
}

export default Homepage

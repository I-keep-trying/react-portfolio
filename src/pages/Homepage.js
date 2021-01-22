import {
  Box,
  Heading,
  Image,
  VStack,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import words from '../imgs/crypto.png'
import routes from '../config/paths'

const Homepage = () => {
  console.log('routes', routes[3])
  return (
    <>
      <article>
        <Link href="https://affectionate-austin-e78d61.netlify.app/wordsearch">
          <VStack
            maxW="xs"
            align="center"
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            mx="auto"
          >
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
            <Box align="center" p={4}>
              <Heading as="h3" size="md">
                Word Search
              </Heading>
              <Text fontSize="sm">For cryptogram and crossword puzzles.</Text>
            </Box>
          </VStack>
        </Link>
      </article>
    </>
  )
}

export default Homepage

import {
  Box,
  Heading,
  Image,
  VStack,
  Text,
  Link,
  Flex,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import words from '../imgs/crypto.png'
import ReactLogo from './../imgs/ReactSvgCli'
import ChakraLogo from './../imgs/ChakraSvgCli'

const Homepage = () => {
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
        <Link href="/wordsearch">
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
      <Flex align="center" justify="center" minH="5vh" mt="1em">
        <HStack spacing="24px">
          <Box>
            <Text fontSize="xs">Proudly made with React and Chakra</Text>
          </Box>
        </HStack>
      </Flex>
      <Flex align="center" justify="center" minH="15vh">
        <HStack spacing="24px">
          <Box>
            <Text
              as="a"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              fontSize="6xl"
            >
              <ReactLogo />
            </Text>
          </Box>
          <Box>
            <Text
              as="a"
              href="https://chakra-ui.com/"
              target="_blank"
              rel="noopener noreferrer"
              fontSize="4xl"
            >
              <ChakraLogo />
            </Text>
          </Box>
        </HStack>
      </Flex>
    </>
  )
}

export default Homepage

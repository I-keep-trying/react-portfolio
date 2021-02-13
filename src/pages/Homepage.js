import {
  Box,
  Heading,
  Image,
  VStack,
  Text,
  Center,
  Link,
  Flex,
  Square,
} from '@chakra-ui/react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import words from '../imgs/crypto.png'

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
            alt="avatar"
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
      </Flex>
      {/*   <article>
       
          <Flex width="Full" align="center" justifyContent="center">
          <Link
          href="https://hungry-bhabha-639136.netlify.app/"
          isExternal
          className="external"
        >
            <Image
              h={56}
            
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
        </Flex>
      </article> */}
    </>
  )
}

export default Homepage

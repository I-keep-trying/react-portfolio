import React from 'react'
import {
  Center,
  Text,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue,
  RadioGroup,
  Stack,
  Radio,
  Button,
} from '@chakra-ui/react'
import ReactLogo from '../../imgs/ReactSvgCli'
import ChakraLogo from '../../imgs/ChakraSvgCli'
import { SiFacebook, SiTwitter, SiGithub, SiLinkedin } from 'react-icons/si'

function Footer() {
  const [placement, setPlacement] = React.useState('bottom')
  const { isOpen, onOpen, onClose } = useDisclosure('isOpen')
  console.log('isOpen', isOpen)
  React.useEffect(() => {
    onOpen()
  },[onOpen])
  return (
    <>
     {/*  <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction="row" mb="4">
          <Radio value="top">Top</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
        </Stack>
      </RadioGroup> */}
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
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

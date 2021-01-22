import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Text, Box, Center, Flex, HStack, extendTheme } from '@chakra-ui/react'
import ReactLogo from './../imgs/ReactSvgCli'
import ChakraLogo from './../imgs/ChakraSvgCli'

const Bio = () => {
  let history = useHistory()

  useEffect(() => {
    history.push('/bio')
  }, [history])

  return (
    <>
      <Center>
        <Box w="80%">
          <Text>Almost before we knew it, we had left the ground.</Text>
          <Text>
            If I had anything to say for myself, this is where I would put it.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            elit felis, fermentum auctor tortor et, faucibus fringilla elit. Ut
            maximus felis id ante facilisis tincidunt. Pellentesque vestibulum,
            eros vel rhoncus rhoncus, leo erat ultrices nisl, at finibus justo
            orci ac nibh. Sed posuere porta libero, sit amet scelerisque eros
            placerat quis. Fusce semper neque vel ligula dictum, sed mattis urna
            aliquet. In sit amet odio non nunc pharetra bibendum. Suspendisse ac
            turpis ultricies, ornare elit in, tristique nunc. Praesent faucibus
            arcu eu lobortis consectetur. Cras nec quam bibendum, dignissim urna
            quis, pellentesque ipsum. Morbi ac ex eget nisl fringilla egestas.
            Sed volutpat lacinia odio tincidunt volutpat. Praesent eget
            consectetur tellus, eu maximus quam. Sed vehicula felis sit amet
            enim aliquam, ac mollis purus viverra. Vivamus in augue ut nisl
            sagittis gravida. Mauris dictum quam vitae metus ornare maximus.
            Aliquam viverra bibendum nisl, a consectetur felis varius sed. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Integer elit
            felis, fermentum auctor tortor et, faucibus fringilla elit. Ut
            maximus felis id ante facilisis tincidunt. Pellentesque vestibulum,
            eros vel rhoncus rhoncus, leo erat ultrices nisl, at finibus justo
            orci ac nibh. Sed posuere porta libero, sit amet scelerisque eros
            placerat quis. Fusce semper neque vel ligula dictum, sed mattis urna
            aliquet. In sit amet odio non nunc pharetra bibendum. Suspendisse ac
            turpis ultricies, ornare elit in, tristique nunc. Praesent faucibus
            arcu eu lobortis consectetur. Cras nec quam bibendum, dignissim urna
            quis, pellentesque ipsum. Morbi ac ex eget nisl fringilla egestas.
            Sed volutpat lacinia odio tincidunt volutpat. Praesent eget
            consectetur tellus, eu maximus quam. Sed vehicula felis sit amet
            enim aliquam, ac mollis purus viverra. Vivamus in augue ut nisl
            sagittis gravida. Mauris dictum quam vitae metus ornare maximus.
            Aliquam viverra bibendum nisl, a consectetur felis varius sed. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Integer elit
            felis, fermentum auctor tortor et, faucibus fringilla elit. Ut
            maximus felis id ante facilisis tincidunt. Pellentesque vestibulum,
            eros vel rhoncus rhoncus, leo erat ultrices nisl, at finibus justo
            orci ac nibh. Sed posuere porta libero, sit amet scelerisque eros
            placerat quis. Fusce semper neque vel ligula dictum, sed mattis urna
            aliquet. In sit amet odio non nunc pharetra bibendum. Suspendisse ac
            turpis ultricies, ornare elit in, tristique nunc. Praesent faucibus
            arcu eu lobortis consectetur. Cras nec quam bibendum, dignissim urna
            quis, pellentesque ipsum. Morbi ac ex eget nisl fringilla egestas.
            Sed volutpat lacinia odio tincidunt volutpat. Praesent eget
            consectetur tellus, eu maximus quam. Sed vehicula felis sit amet
            enim aliquam, ac mollis purus viverra. Vivamus in augue ut nisl
            sagittis gravida. Mauris dictum quam vitae metus ornare maximus.
            Aliquam viverra bibendum nisl, a consectetur felis varius sed.
          </Text>
        </Box>
      </Center>
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
          <Box >
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

export default Bio

import React from 'react'
import {
  IconButton,
  useColorMode,
  Flex,
  Box,
  Stack,
  Text,
  Link,
  Image,
  AspectRatio,
  Grid,
} from '@chakra-ui/react'
import reactLogo from './logo.svg'
import chakraLogo from '../../logo.svg'

function Footer() {
  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mt={0}
      p={8}
    >
      <Text>
        Proudly made with React and Chakra
        <Grid templateColumns="repeat(6, 1fr)" gap={6}>
          <Box></Box> <Box></Box>
          <AspectRatio maxW="60px" ratio={1}>
            <Image size="xs" src={reactLogo} />
          </AspectRatio>
          <AspectRatio maxW="60px" ratio={1}>
            <Image size="xs" src={chakraLogo} />
          </AspectRatio>
          <Box></Box> <Box></Box>
        </Grid>
      </Text>
    </Box>
  )
}

export default Footer

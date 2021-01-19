import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  fonts: {
    body: 'JetBrains Mono',
  },
}

const theme = extendTheme({ config })
export default theme


import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway',
  },
}

const theme = extendTheme({ config })
export default theme

//https://codesandbox.io/s/custom-fonts-reckv?file=/src/App.tsx
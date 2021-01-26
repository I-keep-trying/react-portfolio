import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { HashRouter } from 'react-router-dom'
import { Fonts } from './Fonts/Fonts'
import App from './App'
//import './index.css'

const theme = extendTheme({
  initialColorMode: 'dark',
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway',
  },
})

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Fonts />
    <HashRouter>
      <App />
    </HashRouter>
  </ChakraProvider>,
  document.getElementById('root')
)

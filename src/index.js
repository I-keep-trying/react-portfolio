import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
//import './index.css'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  breakpoints: ['30em', '48em', '62em', '80em'],
}

const theme = extendTheme({ config })

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App theme={theme} />
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById('root')
)
//https://github.com/JasonParra/React-Table-Semantic-UI really good responsive table example

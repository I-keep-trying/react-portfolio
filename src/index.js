import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Fonts } from './Fonts'
import theme from './theme'
import App from './App'
//import './index.css'

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Fonts />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById('root')
)

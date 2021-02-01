import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'whatwg-fetch'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { HashRouter } from 'react-router-dom'
import { Fonts } from './Fonts/Fonts'
import extendTheme from './theme/index.js'
import App from './App'

//import './index.css'

ReactDOM.render(
  <ChakraProvider theme={extendTheme}>
    <Fonts />
    <HashRouter>
      <App />
    </HashRouter>
  </ChakraProvider>,
  document.getElementById('root')
)

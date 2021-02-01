import { extendTheme } from '@chakra-ui/react'
// Global style overrides
//import styles from './styles'
// Foundational style overrides
//import borders from "./foundations/borders"
// Component style overrides
import { IconButton } from '../components/Button/index.js'
const overrides = {
  colors: {
    brand: {
      100: '#B83280',
    },
  },
  styles: {
    global: {
      h6: {
        _hover: {
          bgGradient: 'linear(to-l, #7928CA,#FF0080)',
          bgClip: 'text',
        },
      },
      a: {
        textDecoration: 'none',
        _hover: {
          bgGradient: 'linear(to-l, #7928CA,#FF0080)',
          bgClip: 'text',
          textDecoration: 'none',
          _active: {
            bgGradient: 'linear(to-l, #7928CA,#FF0080)',
            bgClip: 'text',
            textDecoration: 'none',
          },
        },
        _active: { textDecoration: 'none' },
      },
    },
  },
  // Other foundational style overrides go here
  initialColorMode: 'dark',
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway',
  },
  components: {
    //  Button,
    IconButton,
    Heading: {
      variants: {
        'with-gradient': {
          bgGradient: 'linear(to-l, #7928CA,#FF0080)',
          bgClip: 'text',
        },
      },
    },
    Link: {
      textDecoration: 'none',
      _hover: {
        textDecoration: 'none',
      },
    },
  },
}
export default extendTheme(overrides)

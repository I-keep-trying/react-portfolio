import React from 'react'
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Logo, Sun } from '../Logo'

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, Sun)

  return (
    <IconButton
/*       {...props} */
      aria-label={`Switch to ${text} mode`}
      variant="link"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
  )
}

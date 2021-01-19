import React, { useState } from 'react'
import {
  IconButton,
  useColorMode,
  Flex,
  Box,
  Stack,
  Text,
  Link,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import routes from '../config/paths'
import '../App.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Flex
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={2}
      p={8}
    >
      <Logo />
      <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
        {isOpen ? (
          <IconButton aria-label="close menu" icon={<CloseIcon />} />
        ) : (
          <IconButton aria-label="open menu" icon={<HamburgerIcon />} />
        )}
      </Box>
      <MenuLinks toggle={toggle} isOpen={isOpen} />
    </Flex>
  )
}

const MenuLinks = ({ isOpen, toggle }) => {
  return (
    <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }}>
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        {routes.map((route) => (
          <Link
            as={NavLink}
            key={route.path}
            to={route.path}
            activeClassName="active"
            exact
          >
            {route.name}
          </Link>
        ))}
        <ThemeToggle />
      </Stack>
    </Box>
  )
}

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold">
        {colorMode === 'light' ? (
          <IconButton
            aria-label="dark mode"
            icon={<MoonIcon />}
            onClick={toggleColorMode}
          />
        ) : (
          <IconButton
            aria-label="light mode"
            icon={<SunIcon />}
            onClick={toggleColorMode}
          />
        )}
      </Text>
    </Box>
  )
}

export default Header

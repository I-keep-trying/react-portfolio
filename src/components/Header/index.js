import React from 'react'
import {
  Heading,
  HStack,
  IconButton,
  Link,
  useColorMode,
  Box,
  Text,
} from '@chakra-ui/react'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo'
import routes from '../../config/paths'
import '../../App.css'

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

export const Navbar = () => {
  return (
    <>
      <HStack p={4} justify="space-between">
        <HStack spacing={4}>
          <Heading as="h1" size="lg">
            <Logo />
          </Heading>
          <Menu>
            <MenuButton
              display={{ base: 'block', md: 'none' }}
              as={IconButton}
              aria-label="Menu"
              icon={<HamburgerIcon />}
            />
            <MenuList>
              {routes.map((route) => (
                <Link
                  as={NavLink}
                  key={route.path}
                  to={route.path}
                  activeClassName="active"
                  exact
                >
                  <MenuItem>{route.name}</MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>
          <HStack display={{ base: 'none', md: 'block' }} spacing={3}>
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
          </HStack>
        </HStack>
        <HStack spacing={4}>
          <ThemeToggle />
        </HStack>
      </HStack>
    </>
  )
}
export default Navbar

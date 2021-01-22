import React from 'react'
import {
  Heading,
  HStack,
  IconButton,
  Link,
  useColorMode,
  Box,
  Text,
  Flex,
  Spacer,
  VStack,
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo'
import routes from '../../config/paths'
import '../../App.css'
import smartscroll from '../../services/smartScroll'

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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  smartscroll()
  return (
    <>
      <Flex
        id="header-wrap"
        align="center"
        justify="flex-end"
        wrap="wrap"
        w="100%"
        p={8}
      >
        <Heading as="h1" size="lg">
          <Logo />
        </Heading>
        <Spacer />

        <>
          <Button
            ref={btnRef}
            onClick={onOpen}
            display={{ base: 'block', md: 'none' }}
            as={IconButton}
            aria-label=""
            icon={<HamburgerIcon />}
          />
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                  <VStack align="center">
                    {routes.map((route) => (
                      <Link as={NavLink} key={route.path} to={route.path} exact>
                        {route.name}
                      </Link>
                    ))}
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
        <HStack
          display={{ base: 'none', md: 'block' }}
          justify="flex-end"
          spacing={4}
          p={4}
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
        </HStack>
        <HStack spacing={4}>
          <ThemeToggle />
        </HStack>
      </Flex>
    </>
  )
}
export default Navbar

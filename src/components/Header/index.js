import React, { useState, useCallback, useEffect } from 'react'
import {
  HStack,
  IconButton,
  //Link,
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
  useColorModeValue,
  Skeleton,
} from '@chakra-ui/react'
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { NavLink, Link } from 'react-router-dom'
import { Logo, Sun, Moon } from '../Logo'
import routes from '../../config/paths'
//import '../../App.css'

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      {colorMode === 'light' ? (
        <IconButton
          aria-label="dark mode"
          icon={<Moon />}
          onClick={toggleColorMode}
          variant="link"
        />
      ) : (
        <IconButton
          aria-label="light mode"
          icon={<Sun />}
          onClick={toggleColorMode}
          variant="link"
        />
      )}
    </>
  )
}

export const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const handleScroll = () => {
    window.prevOffset = 0
    const position = window.pageYOffset
    const header = document.getElementById('header-wrap')

    setScrollPosition(position)
    if (position > scrollPosition + 25 || position < 100) {
      header.style.top = '-8em'
      header.style.transition = 'top 666ms'
    }
    if (position < scrollPosition - 25 || position < 75) {
      header.style.top = '0'
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Flex
        id="header-wrap"
        bg={useColorModeValue('white', 'gray.800')}
        align="center"
        justify="flex-end"
        wrap="wrap"
        w="100%"
        h="10%"
      >
        <Box w="5%">
          <IconButton
            aria-label="logo"
            variant="link"
            size="lg"
            icon={<Logo />}
          />
        </Box>
        <Spacer />

        <>
          <Button
            ref={btnRef}
            onClick={onOpen}
            display={{ base: 'block', md: 'none' }}
            as={IconButton}
            aria-label="open or close mobile menu"
            variant="unstyled"
            icon={<HamburgerIcon />}
          />
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="xs"
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                  {/* mobile  */}
                  <VStack align="center">
                    {routes.map((route) => (
                      <Link
                        onClick={onClose}
                        /*  as={NavLink} */
                        key={route.path}
                        to={route.path}
                        exact
                      >
                        {route.name}
                        {route.icon}
                      </Link>
                    ))}
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
        {/* tablet and full size */}

        <HStack
          display={{ base: 'none', md: 'block' }}
          justify="flex-end"
          align="right"
          spacing={4}
        >
          {routes.map((route) => (
            <Link
              /*  as={NavLink}  */
              key={route.path}
              to={route.path}
              exact
            >
              {route.name}
              {route.icon}
            </Link>
          ))}
        </HStack>
        <Box ml={0} mr={5} w="5%">
          <ThemeToggle />
        </Box>

        <div className="break"></div>
        <Box w="100%">
          <Skeleton
            startColor="#ff0080"
            endColor="rgb(255, 94, 0)"
            height="2px"
          />
        </Box>
      </Flex>
    </>
  )
}
export default Navbar

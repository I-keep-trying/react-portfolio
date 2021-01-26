import React, { useState, useCallback, useEffect } from 'react'
import {
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
  useColorModeValue,
  Skeleton,
} from '@chakra-ui/react'
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
import { Logo1 } from '../Logo'
import routes from '../../config/paths'
import useEventListener from '../../services/use-event-listener'

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
        mt=".5em"
      >
        <Link align="center" pl={8} href="/">
          <Box maxW="50px" >
            <Logo1 />
          </Box>
        </Link>
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
                        id="header-item"
                        as={NavLink}
                        key={route.path}
                        to={route.path}
                        exact
                      >
                        {route.name}
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
          spacing={4}
          p={4}
        >
          {routes.map((route) => (
            <Link
              id="header-item"
              as={NavLink}
              key={route.path}
              to={route.path}
              exact
            >
              {route.name}
            </Link>
          ))}
        </HStack>

        <HStack pr={8} spacing={4}>
          <ThemeToggle />
        </HStack>
        <div className="break"></div>
        <Box mt=".5em" w="100%">
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

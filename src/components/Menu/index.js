import React, { useState, useEffect } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from 'reactstrap'
import { Link, useLocation } from 'react-router-dom'
import paths from '../../config/paths'

function Menu() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  window.addEventListener('scroll', function (event) {
    let scrollY = this.scrollY

    setScrollPosition(scrollY)
  })

  let { pathname } = useLocation()
  // Hide active class from Main page
  if (pathname === '/') pathname = null

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <Navbar
      expand="md"
      className={
        scrollPosition > 0 || isOpen
          ? 'menu-navbar menu-navbar2'
          : 'menu-navbar'
      }
    >
      <NavbarBrand className="brand" tag={Link} to="/">
        Andrea
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className={isOpen ? 'closeIcon' : ''} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {paths.map((value) => (
            <NavItem key={value.name} className="link">
              <Link
                to={value.path}
                className={pathname === value.path ? 'active' : ''}
              >
                {value.name}
              </Link>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Menu

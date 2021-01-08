import React, { useState } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../A-logo-white2.svg'

const Header = () => {
  const [activeItem, setActiveItem] = useState('home')

  const handleItemClick = (name) => {
    setActiveItem(name.name)
    // on mobile menu, hides menu on click of an option
    const mobileMenu = document.querySelector(
      '.ui.black.massive.inverted.stackable.icon.top.fixed.one.item.menu'
    )
    const menuLinks = document.querySelector(
      '.ui.black.massive.inverted.stackable.top.fixed.seven.item.menu'
    )
    if (mobileMenu.style.display !== 'none') {
      menuLinks.style.display = 'none'
    }
  }

  // show/hide mobile menu on click of hamburger icon
  const handleMenuClick = () => {
    const menuLinks = document.querySelector(
      '.ui.black.massive.inverted.stackable.top.fixed.seven.item.menu'
    )
    if (menuLinks.style.display === 'block') {
      menuLinks.style.display = 'none'
    } else {
      menuLinks.style.display = 'block'
    }
  }

  return (
    <>
      <Menu
        icon
        color="black"
        inverted
        widths={1}
        size="massive"
        fixed="top"
        stackable
        id="hamburger-menu"
      >
        <Menu.Item onClick={handleMenuClick}>
          <Icon name="bars" />
        </Menu.Item>
      </Menu>
      <Menu
        icon
        color="black"
        inverted
        widths={7}
        size="massive"
        fixed="top"
        stackable
      >
        <Menu.Item>
          <img alt="logo" src={logo} />
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/bio"
          name="bio"
          active={activeItem === 'bio'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/wordsearch"
          name="wordsearch"
          active={activeItem === 'wordsearch'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/resume"
          name="resume"
          active={activeItem === 'resume'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/contact"
          name="contact"
          active={activeItem === 'contact'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/videos"
          name="videos"
          active={activeItem === 'videos'}
          onClick={handleItemClick}
        />
      </Menu>
    </>
  )
}

export default Header

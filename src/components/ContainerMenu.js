import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

const ContainerMenu = () => {
  const [activeItem, setActiveItem] = useState('')

  const handleItemClick = (name) => {
    setActiveItem(name)
  }

  return (
    <div>
      <Menu vertical id="compositions-menu">
        <Menu.Item>
          <Menu.Header as="a" href="#favorite-today" className="content-header">
            Today's Favorite Channel
          </Menu.Header>
          <Menu.Menu>
            <Menu.Item
              as="a"
              href="#favorite-today"
              name="Today's Favorite Channel"
              active={activeItem === "Yesterday's Favorite"}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>
        {/*  */}
        <Menu.Item>
          <Menu.Header as="a" href="#favorite-yesterday">
            Yesterday's Favorite
          </Menu.Header>
          <Menu.Menu>
            <Menu.Item
              as="a"
              href="#favorite-yesterday"
              name="Rick Beato"
              active={activeItem === 'Rick Beato'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default ContainerMenu

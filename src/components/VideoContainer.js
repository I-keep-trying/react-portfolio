import React from 'react'
import ContainerMenu from './VideosMenu'
import ContainerBody from '../pages/Videos'

const Container = () => {
  return (
    <div className="comp-grid">
       
      <ContainerMenu />
      <ContainerBody />
    </div>
  )
}

export default Container

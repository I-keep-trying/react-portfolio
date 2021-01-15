import React from 'react'
import logo from '../imgs/A-logo-gray2.svg'

const Homepage = () => {
  return (
    <div className="white-container-home">
      <h1 className="name">Andrea Crego</h1>
      <h2 className="subheader">Web App Developer</h2>
      <div className="home-icons">
        <a
          href="https://github.com/I-keep-trying"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <a
          href="https://twitter.com/Andrea_Crego"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </div>
      <img src={logo} alt="logo" className="photo-small" />
    </div>
  )
}

export default Homepage

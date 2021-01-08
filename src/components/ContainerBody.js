/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'

const ContainerBody = () => {
  return (
    <div className="white-container">
      <div className="comp-section">
        <h1 className="heading" id="favorite-today">
         Today's Favorite Channel
        </h1>
        <div className="composition">
          <h2 className="subheading" id="favorite-today">
            Daily Dose of Internet
          </h2>
          <p>
            <a
              href="https://youtu.be/yr8BbsddlK8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Crow Helps Hedgehog Cross The Street
            </a>
          </p>
          <iframe
            title="Today's Favorite Channel"
            src="https://www.youtube.com/embed/yr8BbsddlK8"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          />
        </div>
      </div>
      <div className="comp-section">
        <h1 className="heading" id="favorite-yesterday">
         Yesterday's Favorite
        </h1>
        <div className="composition">
          <h2 className="subheading" id="favorite-yesterday">
            Rick Beato
          </h2>
          <p>
            <a
              href="https://youtu.be/VqFbwbLQPsc"
              target="_blank"
              rel="noopener noreferrer"
            >
             TOP 20 ROCK BASS INTROS OF ALL TIME
            </a>
          </p>
          <iframe
            title="TOP 20 ROCK BASS INTROS OF ALL TIME"
            src="https://www.youtube.com/embed/VqFbwbLQPsc"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          />
        </div>
      </div>
    </div>
  )
}

export default ContainerBody

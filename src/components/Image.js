import React from 'react'
import image from "./../buzz.png"
import './../stylesheets/stylesheet.css'
import './../App.css'


export const Image = () => {
  return (
    <>
    <div className='buzz'>
        <img src={image} className="App-image" alt="image_" width={250} />
    </div>

    </>
  )
}


import React from 'react'


export const Address = ({props}) => {

  const city = props.address.city
  const state = props.address.state
  

      
  return (
    <>
      <div>
        <p>{city}, {state}</p>
        <br/>
      </div>
    </>
  )
}

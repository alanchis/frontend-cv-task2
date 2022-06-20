
import React from 'react'


export const Name = ({props}) => {

  const name = props.name
  const position = props.position
  const email = props.contactInfo.email
  const mobile = props.contactInfo.mobile

        
    return (
      <>
        <div>
        <h2>{name}</h2>
        <p><b>{position}</b></p>
        <p><b>email:</b> {email}</p>
        <p><b>phone:</b> {mobile} </p>
        </div>

      </>
    )
  }
  
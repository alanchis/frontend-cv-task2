
import React from 'react'


export const Name = ({props}) => {

  const name = props.name
  const position = props.position
  const email = props.contactInfo.email
  const mobile = props.contactInfo.mobile

        
    return (
      <>
        <div>
        <h1>{name}</h1>
        <p><b>{position}</b></p>
        <p><b>E-mail: </b> {email}</p>
        <p><b>Phone: </b> {mobile} </p>
        </div>

      </>
    )
  }
  
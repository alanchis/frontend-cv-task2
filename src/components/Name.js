
import React from 'react'


export const Name = ({props}) => {

  console.log(props)


  // const data = useFetchBackend()
  // console.log(data)

  const name = props.name
  const position = props.position
  // // console.log(name)
        
    return (
      <>
      <div>

      <h2>{name}</h2>
      <p>{position}</p>
      <p><b>email:</b> alan@gmail.com</p>
      <p><b>phone:</b> 55-1234-1234</p>

      </div>

      </>
    )
  }
  
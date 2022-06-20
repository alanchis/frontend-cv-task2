import React from 'react'

export const Experience = ({props}) => {

  const experience = props.experience

  const listExperience = experience.map(({dates, company, position, description}) => {return( 
  <div key={dates}>
    <p><b>Date: </b>{dates}</p>
    <p><b>Company: </b>{company}</p>
    <p><b>Position: </b>{position}</p>
    <p><b>Description: </b>{description}</p>
    <br/>


  </div>
  )}) 


  return (
    <>
        <h2>Experience</h2>
        <br/>

        {listExperience}

            <br/>
      

    </>
  )
}

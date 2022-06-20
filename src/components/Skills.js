import React from 'react'

export const Skills = ({props}) => {

  const skill = props.skills
  const listSkills = skill.map((item) => {return <li key={item}>{item}</li>}) 
  


    
  return (
    <>
    <h2>Skills</h2>
    <ul>
      {listSkills}
    </ul>

    <br/>
    <hr/>



    </>
  )
}

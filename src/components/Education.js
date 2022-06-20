import React from 'react'

export const Education = ({props}) => {

  const education = props.education

  const listEducation = education.map(({date, title, university}) => {return( 
  <div key={date}>
    <p><b>Date: </b>{date}</p>
    <p><b>Title: </b>{title}</p>
    <p><b>University: </b>{university}</p>
    <br/>

  </div>
)}) 


  return (
    <>
        <h2>Education</h2>
        <br/>

        {listEducation}











        {/* <p><b>Date:</b> March 2022</p>
        <p><b>Title:</b> Full Stack Web Development Bootcamp</p>
        <p><b>University:</b> Ironhack</p>
        <br/>

        <p><b>Date:</b> May 2015</p>
        <p><b>Title:</b> Bachelor in Civil Engineering</p>
        <p><b>University:</b> UNAM</p>
        <br/>
        <hr/> */}

        <br/>
   




    </>
  )
}

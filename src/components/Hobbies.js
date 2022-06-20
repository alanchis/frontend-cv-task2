import React from 'react'

export const Hobbies = ({props}) => {

    const hobby = props.hobbies
    const listHobbies = hobby.map((item) => {return <li key={item}>{item}</li>}) 



    return (
        <>
            <h2>Hobbies</h2>

            <ul>
            {listHobbies}
            </ul>


        </>
    )
}

import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetchBackend = () => {

    const [infoCv, setInfoCv] = useState({})

const getInfo = async ()  => {
    const { data } = await axios.get("https://alan-backend-cv-task2.herokuapp.com/api")
    //console.log(data)
    setInfoCv(data)

}
   
useEffect(() => {

    getInfo()
    console.log('se corre la funcion getinfo()')

},[])

  return (
    infoCv
  )
}

import axios from 'axios'
import { useEffect, useState } from 'react'
// import { Address } from '../components/Address'
// import { Name } from '../components/Name'

export const useFetchBackend = () => {

    const [infoCv, setInfoCv] = useState()

const getInfo = async ()  => {
    const { data } = await axios.get("https://alan-backend-cv-task2.herokuapp.com/api")
    // console.log(data)
    setInfoCv(data)

}

   
useEffect(() => {

    getInfo()
    console.log('run getinfo()')

},[])



  return (
    
    infoCv
  )

  // return (
  //   <>
  //   <Address infoCv = {infoCv}/>
  //   <Name infoCv = {infoCv}/>
  //   </>

    
  // )
}

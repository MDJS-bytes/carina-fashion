'use client'

import ButtonComponent from '@/components/button'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const fetchdata = async() =>{
  const response = await axios.get('http://localhost:3001/api/v1')
  console.log(document.location.host)
  console.log(response.data.maindata)
}



const AboutPageComponent = () => {
  const urlParams = useSearchParams()

  // const allParams = new URLSearchParams(urlParams)
  const anotherParams = new URLSearchParams()
  const allparam = anotherParams.getAll()
  
  return (
    <div>
      <h1>This is the about page</h1>
      <ButtonComponent />
      <div onClick={fetchdata}>
        <button className='px-16 py-6 rounded-lg bg-blue-400'>get data {urlParams.get("key")} </button>
      </div>
      {
        JSON.stringify(allparam)
      }
    </div>
  )
}

export default AboutPageComponent

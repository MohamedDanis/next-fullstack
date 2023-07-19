import React from 'react'
import Image from 'next/image'
import load from './Aniki Hamster.gif'

function loading() {
  return (
   <div className=''>
    <Image src={load} alt="loading" width={200} height={200}/>
   </div>
  )
}

export default loading
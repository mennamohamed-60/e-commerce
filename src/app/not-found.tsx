import React from 'react'
import error from '@images/error.svg'
import Image from 'next/image'

export default function notFound() {
  return (
    <div className='flex justify-center items-center min-h-screen' >
      <Image  src={error} alt='error photo'></Image>
    </div>
  )
}

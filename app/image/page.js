"use client"
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Image
      className='mx-auto' width={700} height={500}
      src="https://www.axelerant.com/hubfs/Imported_Blog_Media/nextjs_image1.jpg" 
      alt="Description of the image" />
    </div>
  )
}

export default page

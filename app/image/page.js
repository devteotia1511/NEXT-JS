"use client"
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="relative w-full h-[500px] flex justify-center">
      <Image
        className="object-cover"
        src="https://www.axelerant.com/hubfs/Imported_Blog_Media/nextjs_image1.jpg"
        alt="Description of the image"
        fill
      />
    </div>
  )
}

export default page

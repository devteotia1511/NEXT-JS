import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='p-4 flex justify-between m-4 bg-white text-black font-serif'>
      <div className='logo font-bold font-mono'>NEXT JS</div>
      <ul className='flex gap-6'>
        <Link href='/'><li>Home</li></Link>
        <Link href='/about'><li>About</li></Link>
        <Link href='/image'><li>Image</li></Link>
        <Link href='/contact'><li>Contact</li></Link>
        <Link href='/product'><li>Product</li></Link>
        <Link href="/business"><li>Business</li></Link>
      </ul>
    </div>
  )
}


export default Navbar

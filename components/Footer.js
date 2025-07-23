import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white text-black m-4 p-4 font-mono flex justify-between'>
      <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <ul className='flex gap-6'>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/contact">Contact Us</a></li>
        </ul>
    </div>
  )

}

export default Footer

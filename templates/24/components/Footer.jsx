import React from 'react'
import logo from  '../assets/images/Navbar/logo.png'
const Footer = () => {
  return (
    <div className='px-4 py-4'>
      {/* footer  */}

      <div className='flex max-sm:flex-col gap-2 justify-between items-center'>
        {/* left  */}
        <div className='flex gap-2'>
            <img src={logo.src} alt="" className='h-6' />
            <p className='text-base font-bold leading-6'>DevOps</p>
        </div>

        {/* right  */}
        <ul className='flex flex-wrap max-sm:justify-center gap-6 font-bold'>
            <li>Home</li>
            <li className='font-medium text-black/50 dark:text-white/50' >Features</li>
            <li className='font-medium text-black/50 dark:text-white/50' >Pricing</li>
            <li className='font-medium text-black/50 dark:text-white/50' >Testimonial</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

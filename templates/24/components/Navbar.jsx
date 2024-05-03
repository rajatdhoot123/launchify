import React from 'react'
import logo from '../assets/images/Navbar/logo.png'
import { Inter ,DM_Sans } from 'next/font/google';
import Link from 'next/link'

const inter = Inter({
weight: ["200", "300", "400", "500", "600", "700", "800"],
subsets: ["latin"],
});

const dm = DM_Sans({
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
    });
    

const Navbar = () => {
  return (
    <div className='w-full md:w-4/5 mx-auto bg-white dark:bg-black dark:text-white px-5 py-3 md:rounded-xl'>
        <nav className='flex justify-between items-center'>
            {/* logo  */}
            <div className='flex gap-2 py-3'>
                <img src={logo.src} alt="" className='h-6'/>
                 <p className={`${dm.className} text-base font-bold`}>Pro-dev</p>
            </div>

            {/* links */}
            <ul className='max-md:hidden flex gap-6 text-black/50  dark:text-white/50 font-medium'>
                <li className='text-black dark:text-white font-bold'>
                    <Link href=''>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='#'>
                        Features 
                    </Link>
                </li>
                <li>
                    <Link href=''>
                        Pricing
                    </Link>
                </li>
                <li>
                    <Link href=''>
                        Testimonials 
                    </Link>
                </li>
            </ul>


            {/* button  */}
            <button className={`${inter.className} font-semibold leading-4 bg-black dark:bg-white text-white dark:text-black p-3 rounded-xl`}>
                Get Started &rarr;
            </button>
        </nav>
    </div>
  )
}

export default Navbar

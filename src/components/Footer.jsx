import React from 'react'
import { LOGO } from '../utils/constants'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-black via-black to-slate-900 p-4 flex justify-between'>
        <img src={LOGO} alt="" className='h-16 p-2 ml-4'/>
        <div className='flex gap-4 text-white items-center'>
            <div>Contact Us</div>
            <div>About Us</div>
            <div>Help</div>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'

const Testimony = (props) => {
  return (
    <div className='h-fit p-10 bg-[#F3F3F3]/75 backdrop-blur-md rounded-xl'>
      <div className='space-y-7'>
        <p className='max-w-xs leading-9 text-2xl'>{props.desc}</p>
        <div className='flex gap-3'>
            <img src={props.img.src} alt="" />
            <div>
                <p className='font-bold text-lg'>{props.name}</p>
                <p>{props.pos}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimony

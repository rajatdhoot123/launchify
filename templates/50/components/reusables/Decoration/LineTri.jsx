import React from 'react'
import Image from 'next/image'
import tri from '../../../assets/triangle.svg'
import line from '../../../assets/line.svg'

const LineTri = ({ className }) => {
    return (
        <div className={`flex flex-col items-end gap-5 ${className}`}>
            <Image 
            src={tri}
            width={40}
            height={40}
            alt="triangle icon"
            />

            <Image 
            src={line}
            width={95}
            height={81}
            alt="triangle icon"
            />
        </div>
    )
}

export default LineTri

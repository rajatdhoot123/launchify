import React from 'react'

const Circle = ({
    height = 100, 
    width = 100, 
    className = ""
}) => {
    return (
        <div className={`rounded-full border-green overflow-x-hidden ${className}`} style={{
            height: `${height}px`,
            width: `${width}px`,
            zIndex: 0
        }}>
        </div>
    )
}

export default Circle

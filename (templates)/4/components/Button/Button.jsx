import React from 'react'

const Button = ({
    variant="light",
    text,
    onClick,
    className
}) => {
    return (
        <button
        onClick={onClick}
        className={`my-5 flex items-center justify-center font-bold ${variant == "light" ? "bg-green text-black" : "bg-transparent text-white"} border-green py-3 rounded-full  ${className}`}>
            {text}
        </button>
    )
}

export default Button

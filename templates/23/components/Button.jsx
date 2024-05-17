import React from 'react';

const Button = ({
    text,
    onClick,
    className = ''
}) => {


    return (
        <button
            onClick={onClick}
            className={`my-5 dark:bg-white dark:text-black bg-black text-white flex items-center justify-center font-bold py-1 w-full rounded-full hover:scale-105 transition-all  ${className}`}>
            {text}
        </button>
    );
}

export default Button;

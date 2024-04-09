import React from 'react'

const Tag = ({ text }) => {
    return (
      <div className="flex items-center justify-center">
        <button className="my-4 uppercase text-sm px-5 py-2 bg-green flex-inline text-black rounded-full font-semibold">
          {text}
        </button>
      </div>
    );
}

export default Tag

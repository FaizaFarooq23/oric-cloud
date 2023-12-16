import React from 'react'

export default function Welcome() {
  return (
    <div className="flex justify-between items-center bg-div-gray px-4 mt-8 rounded-lg">
        <div className="flex flex-col" >
          <span className="text-2xl font-bold">Hello Faiza!</span>
          <span>Its good to see you again.</span>
        </div>
        <div className="mr-4">
          <img
            src="images/illustration.svg"
            alt="logo"
            className="h-32 z-10 -mt-6 "
          />
        </div>
      </div>
  )
}

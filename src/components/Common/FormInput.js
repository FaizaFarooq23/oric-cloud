import React from 'react'

export default function FormInput({lable,value}) {
  return (
    <div><div>
    <label
      className="block text-sm font-medium text-blue-900"
    >
        {lable}
  
    </label>
    <input
      onChange={(e) => {(e.target.value);
      }}
      defaultValue={value}
      type="text"
      autoComplete="off"
      required
      className="relative block w-full mt-2 appearance-none rounded-none bg-transparent
     border border-gray-300 px-3  py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
    />
  </div></div>
  )
}

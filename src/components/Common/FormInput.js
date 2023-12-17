import React from 'react'

export default function FormInput({lable,value, setVal, type}) {
  return (
    <div>
      <div>
    <label
      className="block text-sm font-medium text-white"
    >
        {lable}
  
    </label>
    <input
      onChange={(e) => setVal(e.target.value)}
      defaultValue={value}
      type={type}
      autoComplete="off"
      required
      className="w-[60%] appearance-none rounded-none bg-transparent
      border-b-2 border-gray-300 py-1 text-white placeholder-gray-500 focus:z-10 focus:border-mustard-yellow  focus:ring-slate-100  focus:outline-none  sm:text-sm"
    />
  </div></div>
  )
}

import React, { useState } from 'react'

export default function EditableField({label,isEditingValue,handleValueBlur,handleValueChange,editedValue}) {

  return (
    <div className="flex items-center justify-start gap-x-20 text-lg">
    <span className="w-1/2 text-gray-500  font-medium">{label}</span>
    <span
      className={`w-[1/2] text-black ${
        isEditingValue ? "border-b border-blue-900  w-full px-2 focus:outline-none" : ""
      }`}
      contentEditable={isEditingValue}
      onBlur={handleValueBlur}
      onInput={handleValueChange}
    >
      {editedValue}
    </span>
  </div>
  )
}

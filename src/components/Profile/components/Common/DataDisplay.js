import React, { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import EditableField from "./EditableField";


export default function DataDisplay({data,heading, updateInfo}) {
  const handleValueClick = () => {
    setIsEditingValue((prevIsEditing) => !prevIsEditing);
  };

  const [isEditingValue, setIsEditingValue] = useState(false);
  

  return (
    <div className="w-[50%] flex flex-col bg-white shadow-lg rounded-md px-10 py-8 gap-y-10 mt-4">
      <div className="flex items-center justify-between">
        <span className="text-blue-900 text-xl font-semibold">{heading}</span>
        <span>
          <FaPencil
            className="text-base text-blue-900 cursor-pointer"
            onClick={handleValueClick}
          />
        </span>
      </div>

    {data.map((item, index) => (
        <EditableField key={index} label={item.label} data={data} updateInfo={updateInfo} isEditingValue={isEditingValue} editedValue={item.value} />
      ))}
      </div>
  );
}

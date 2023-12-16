import React from "react";
import { FaHouse } from "react-icons/fa6";
import {
  IoLogOutOutline,
  IoPersonOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdOutlineImageSearch, MdOutlineSmartToy } from "react-icons/md";
export default function Sidebar() {
  return (
    <div className="ml-2 h-[98vh] w-[8%] flex flex-col items-center justify-between bg-blue-900 rounded-lg shadow-left">
      <div className="flex flex-col gap-y-12">
        <div>
          <img src="images/white-logo.png" alt="logo" className="h-20 w-32" />
        </div>
        <div className="flex flex-col items-center gap-y-10">
          <FaHouse className="h-6 w-6 text-white" />
          <IoPersonOutline className="h-6 w-6 text-white" />
          <MdOutlineImageSearch className="h-6 w-6 text-white" />
          <MdOutlineSmartToy className="h-6 w-6 text-white" />
          <IoSettingsOutline className="h-6 w-6 text-white" />
        </div>
      </div>

      <div className="pb-6">
        <IoLogOutOutline className="h-7 w-7 text-white" />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import PersonalInfo from "./Tabs/PersonalInfo";
import Education from "./Tabs/Education";

export default function Tabs() {
  const tabs = [
    {
      name: "Personal",
      component: <PersonalInfo/>,
    },

    {
      name: "Education",
      component: <Education/>,
    },

    {
      name: "Researches",
      component: <div>Researches</div>,
    },

    {
      name: "Publications",
      component: <div>Publications</div>,
    },
    {
      name: "Awards",
      component: <div>Awards</div>,
    },
    {
      name: "Projects",
      component: <div>Projects</div>,
    },
    {
      name: "Experience",
      component: <div>Experience</div>,
    },
  ];

  const [activeTab, setActiveTab] = useState("Personal");

  const handleTabChange = (tab) => {
    setActiveTab(tab.name);
  };

  return (
    <div className="flex flex-col text-[#D8D8D8] text-sm font-medium pt-8 ">
      <div className=" flex  items-start justify-start gap-x-10">{tabs.map((tab, index) => (
        <div
          key={index}
          onClick={() => handleTabChange(tab)}
          className={`${
            activeTab === tab.name
              ? " border-blue-900 text-blue-900 border-b-[3px]"
              : "border-none"
          } flex items-center justify-center h-12 cursor-pointer hover:text-blue-900`}
        >
          {tab.name}
        </div>

      ))}
      </div>
      <div className="w-full">
        {tabs.map((tab, index) => (
          <div key={index}>
            {activeTab === tab.name && tab.component}
          </div>
        ))}
        </div>
    </div>
  );
}

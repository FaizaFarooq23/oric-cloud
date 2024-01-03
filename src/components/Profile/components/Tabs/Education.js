import React, { useState } from "react";
import DataDisplay from "../Common/DataDisplay";

const qualification = [
  {
    label: "Latest Degree",
    value: "BSCS",
  },
  {
    label: "Institute",
    value: "FAST",
  },
  {
    label: "Year",
    value: "2021",
  },
  {
    label: "CGPA",
    value: "3.5",
  },
  { label: "Field", value: "Computer Science" },
 
];

export default function Education() {
  const [education, setEducation] = useState(null);
  return (
    <div className="">
      {qualification ? (
        <div className="flex gap-x-10">
          <DataDisplay data={qualification} heading={"Education"} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

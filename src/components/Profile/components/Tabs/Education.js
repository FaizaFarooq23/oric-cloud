import React, { useContext, useEffect, useState } from "react";
import DataDisplay from "../Common/DataDisplay";
import { UserContext } from "@/context/UserContext/GlobalProvider";

export default function Education() {
  const {user} = useContext(UserContext)
  const [qualification, setQualification] = useState(false);

useEffect(() => {
  console.log(user)
  const data = [
    {
      label: "Degree",
      value: user.degree,
    },
    {
      label: "Institute",
      value: user.institude,
    },
    {
      label: "Year",
      value: user.completion_year,
    },
    {
      label: "CGPA",
      value: user.cgpa,
    },
    { label: "Field", value: user.field_of_study },
  ]

  setQualification(data);

}, [user]);

  return (
    <div className="">
      {qualification ? (
        <div className="flex  gap-x-10">
          <DataDisplay data={qualification} heading={"Education"} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

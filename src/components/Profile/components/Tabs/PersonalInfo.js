import React, { useContext, useEffect, useState } from "react";
import DataDisplay from "../Common/DataDisplay";
import { useSession } from "next-auth/react";
import axios from "axios";
import { UserContext } from "@/context/UserContext/GlobalProvider";




// const data = [
//   {
//     label:"Name",
//     value:"Faiza",
//   },
//   {
//     label:"Age",
//     value:"18",
//   },
//   {
//     label:"Gender",
//     value:"Female",
//   },
//   {
//     label:"Nationality",
//     value:"Pakistani",
//   },
// ]

const contactInfo = [
  {
    label:"Email",
    value:"Faiza123@gmail.com",
  },
  {
    label:"Contact Number",
    value:"0333-1234567",
  },
  {
    label:"Address",
    value:"Lahore",
  },
]

function calculate_age(dob) { 
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}


export default function PersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState(false);
  const {user} = useContext(UserContext)

  useEffect(() => {
    console.log(user)
    const data = [
      {
        label:"Name",
        value:user.name,
      },
      {
        label: "Age",
        value: calculate_age(new Date(user.date_of_birth)),
      },
      {
        label: "Designation",
        value: user.designation,
      },
      {
        label: "Department",
        value: user.department,
      }
    ]

    setPersonalInfo(data);

  }, [user]);


  return (
    <div className="">
      {personalInfo ? (
      <div className="flex gap-x-10">  
      <DataDisplay data={personalInfo} heading={"Personal Information"} />
        <DataDisplay data={contactInfo} heading={"Contact Information" }/>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

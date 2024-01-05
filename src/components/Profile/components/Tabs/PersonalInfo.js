import React, { useContext, useEffect, useState } from "react";
import DataDisplay from "../Common/DataDisplay";
import { UserContext } from "@/context/UserContext/GlobalProvider";


function calculate_age(dob) { 
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

export default function PersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState(false);
  const [contactInfo, setContactInfo] = useState(false);
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

  useEffect(() => {
    const data = [
      {
        label: "Email",
        value: user.email,
      },
      {
        label: "Phone",
        value: user.contact_number,
      },
      {
        label: "Address",
        value: user.address,
      },
    ];

    setContactInfo(data);
  }
  , [user]);



  useEffect(() => {
    

  }, [personalInfo]);

  return (
    <div className="">
      {personalInfo ? (
        <React.Fragment>
      <div className="flex gap-x-10">  
      <DataDisplay data={personalInfo} updateInfo={setPersonalInfo} heading={"Personal Information"} />
        <DataDisplay data={contactInfo} heading={"Contact Information" }/>
        
        </div>
        
    </React.Fragment>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  );
}

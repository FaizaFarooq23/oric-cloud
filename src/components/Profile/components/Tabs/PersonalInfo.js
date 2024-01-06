import React, { useContext, useEffect, useState } from "react";
import DataDisplay from "../Common/DataDisplay";
import { UserContext } from "@/context/UserContext/GlobalProvider";
import axios from "axios";


function calculate_age(dob) { 
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

export default function PersonalInfo() {
  const [myUser, setMyUser] = useState(null);
  const [personalInfo, setPersonalInfo] = useState(false);
  const [contactInfo, setContactInfo] = useState(false);
  const {user} = useContext(UserContext)

  useEffect(() => {
    console.log(user)
    if (user){
      setMyUser(user);
    }
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
        label: "Date of Birth",
        value: user.date_of_birth,
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


    const contact_data = [
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

    setContactInfo(contact_data);
  }, [user]);



  // Update the personal info of the user
  useEffect(() => {
    const updatePersonalInfo = async () => {
      try {
        const res = await axios.post(`/api/faculty/update_faculty_personal_info`, {
          username: user.username,
          name: personalInfo[0].value,
          date_of_birth: personalInfo[2].value,
          designation: personalInfo[3].value,
          department: personalInfo[4].value,
        });
        console.log(res);
      } catch (error) {
        console.error("Error updating personal information:", error);
      }
    };
    if (personalInfo) {
      updatePersonalInfo();
    }
  }, [personalInfo]);


  // Update the contact info of the user
  useEffect(() => {
    const updateContactInfo = async () => {
      try {
        const res = await axios.post(`/api/faculty/update_faculty_contact_info`, {
          username: user.username,
          email: contactInfo[0].value,
          contact_number: contactInfo[1].value,
          address: contactInfo[2].value,
        });
        console.log(res);
      } catch (error) {
        console.error("Error updating contact information:", error);
      }
    };
    if (contactInfo) {
      updateContactInfo();
    }
  }, [contactInfo]);

  return (
    <div className="">
      {personalInfo ? (
        <React.Fragment>
        <div className="flex gap-x-10">  
          <DataDisplay data={personalInfo} updateInfo={setPersonalInfo} heading={"Personal Information"} />
          <DataDisplay data={contactInfo} updateInfo={setContactInfo} heading={"Contact Information" }/>
        </div>
        
    </React.Fragment>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  );
}

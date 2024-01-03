import React, { useEffect, useState } from "react";
import DataDisplay from "../Common/DataDisplay";
import { useSession } from "next-auth/react";
import axios from "axios";




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


export default function PersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState(true);
  const {data: session} = useSession();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/faculty/get_faculty` , {
          params: {
            username: session.user.username,
          }
        });
        console.log(res)
        //setPersonalInfo(res);
      } catch (error) {
        console.error("Error fetching personal information:", error);
      }
    };
    if(session){
      console.log(session)
      fetchData();
    }
  }, []);




  return (
    <div className="">
      {personalInfo ? (
      <div className="flex gap-x-10">  
      {/* <DataDisplay data={data} heading={"Personal Information"} /> */}
        <DataDisplay data={contactInfo} heading={"Contact Information" }/>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

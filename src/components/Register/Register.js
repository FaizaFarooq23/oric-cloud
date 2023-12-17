import React, { useState } from "react";
import FormInput from "../Common/FormInput";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [department, setDepartment] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [qualification, setQualification] = useState("");
  const [designation, setDesignation] = useState("");
  const [cnic, setCnic] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch('/api/register_faculty', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phoneNumber,
          confirmPassword,
          username,
          department,
          dateOfBirth,
          qualification,
          designation,
          cnic,
        }),
      });

      if (response.ok) {
        // Registration successful
        console.log('Registration successful');
      } else {
        // Handle registration error
        const data = await response.json();
        console.error('Registration failed:', data.error);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-between  ">
    <div className=" flex flex-col items-center ">
      <div className="flex justify-between items-center px-12 ">
        <div className="flex justify-center ">
          <img src="images/white-logo.png" alt="logo" className="h-24 " />
        </div>
      </div>
    
        <div
        className=" w-screen py-10  gap-y-8 border-t px-36  "
      >
        <div className=" h-full grid grid-cols-3 gap-x-4">
          <FormInput lable={"Name"} value={name} type={"text"} setVal={setName} />
          <FormInput lable={"Username"} value={username} type={"text"} setVal={setUsername} />
          <FormInput lable={"Email"} value={email} type={"email"} setVal={setEmail} />
          <FormInput lable={"CNIC"} value={cnic} type={"text"} setVal={setCnic} />
          <FormInput lable={"Phone Number"} value={phoneNumber} type={"text"} setVal={setPhoneNumber} />
          <FormInput lable={"Department"} value={department} type={"text"} setVal={setDepartment} />
          <FormInput lable={"Date of Birth"} value={dateOfBirth} type={"date"} setVal={setDateOfBirth} />
          <FormInput lable={"Qualification"} value={qualification} type={"text"} setVal={setQualification} />
          <FormInput lable={"Designation"} value={designation} type={"text"} setVal={setDesignation}/>
          <FormInput lable={"Password"} value={password} type={"password"} setVal={setPassword}/>
          <FormInput lable={"Confirm Password"} value={confirmPassword} type={"password"} setVal={setConfirmPassword} />
          </div>
          <div className="w-full flex justify-center  items-center py-8">
          <button
          onClick={handleRegister}
            className="flex w-[60%] justify-center border border-transparent
            bg-mustard-yellow py-2 px-4 text-sm font-medium text-blue-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Register
          </button>
        </div>
        </div>

       
      </div>
    </div>
  );
}

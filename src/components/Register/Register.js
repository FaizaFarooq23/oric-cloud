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
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-2/3 lg:w-2/3 h-[90%] flex flex-col bg-white border border-slate-300 shadow-xl">
        <div className="flex justify-between items-center px-12 py-4">
          <div className="flex justify-center">
            <img src="images/oric-logo.png" alt="logo" className="" />
          </div>
          <div className=" text-4xl text-center mt-2 font-medium  text-blue-900">
            <h2 className="mt-1 text-2xl font-bold">Register Here</h2>
          </div>
        </div>
        <div className="w-full gap-x-16 gap-y-2 border-t border-slate-300 flex flex-wrap justify-center  pt-8 px-12 bg-white ">
          <FormInput lable={"Name"} value={name} setVal={setName} />
          <FormInput lable={"Username"} value={username} setVal={setUsername} />
          <FormInput lable={"Email"} value={email} setVal={setEmail} />
          <FormInput lable={"CNIC"} value={cnic} setVal={setCnic} />
          <FormInput lable={"Phone Number"} value={phoneNumber} setVal={setPhoneNumber} />
          <FormInput lable={"Department"} value={department} setVal={setDepartment} />
          <FormInput lable={"Date of Birth"} value={dateOfBirth} setVal={setDateOfBirth} />
          <FormInput lable={"Qualification"} value={qualification} setVal={setQualification} />
          <FormInput lable={"Designation"} value={designation} setVal={setDesignation}/>
          <FormInput lable={"Password"} value={password} setVal={setPassword}/>
          <FormInput lable={"Confirm Password"} value={confirmPassword} setVal={setConfirmPassword} />
        </div>

        <div className="w-full flex justify-center  items-center py-8">
          <button
          onClick={handleRegister}
            className="group relative flex w-full justify-center border border-transparent
               bg-blue-900 py-2 px-4 text-sm font-medium text-white hover:bg-blue-800 "
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

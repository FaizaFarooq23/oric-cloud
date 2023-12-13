import React, { useState } from "react";
import FormInput from "../Common/FormInput";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [qualification, setQualification] = useState("");
  const [designation, setDesignation] = useState("");
  const [cnic, setCnic] = useState("");

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
          <FormInput lable={"Name"} value={name} />
          <FormInput lable={"Email"} value={email} />
          <FormInput lable={"CNIC"} value={cnic} />
          <FormInput lable={"Phone Number"} value={phoneNumber} />
          <FormInput lable={"Age"} value={age} />
          <FormInput lable={"Department"} value={department} />
          <FormInput lable={"Date of Birth"} value={dateOfBirth} />
          <FormInput lable={"Qualification"} value={qualification} />
          <FormInput lable={"Designation"} value={designation} />
          <FormInput lable={"Password"} value={password} />
          <FormInput lable={"Confirm Password"} value={confirmPassword} />
        </div>

        <div className="w-full flex justify-center  items-center py-8">
          <button
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

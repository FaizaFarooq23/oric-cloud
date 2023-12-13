import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Login({ adminLogin, facultyLogin, setAdminLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState({ show: false, message: "" });
  const router = useRouter();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    setLoading({ show: true, message: "Logging in..." });
    if (username === "" || password === "") {
      setLoading({ show: false, message: "" });
      alert("Please fill all the fields");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      username: username,
      password: password,
    });
    console.log(res);

    if (res.status === 200) {
      setLoading({ show: false, message: "" });
      router.push("/dashboard");
    }
    if (res.status === 401) {
      setLoading({ show: false, message: "" });
      alert(res.error);
    }


  };

  return (
    <div className="w-full h-screen font-poppins flex flex-col justify-center items-center ">
      <div className="w-2/3 lg:w-2/3 h-[90%] flex flex-col bg-white border border-slate-300 shadow-xl">
        <div className="flex justify-between items-center px-12 py-4">
          <div className="flex justify-center">
            <img src="images/oric-logo.png" alt="logo" className="" />
          </div>
          <div className=" text-4xl text-center mt-2 font-medium  text-blue-900">
            <h2 className="mt-1 text-2xl">Faculty Portal</h2>
          </div>
        </div>
        <div
          // style={{ backgroundImage: `url("images/chart.gif")` }}
          className=" w-full gap-x-16 border-t border-slate-300 relative z-10 flex justify-between items-end pt-16 px-12 bg-white "
        >
          <video
            autoPlay
            loop
            muted
            style={{
              height: "76%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 200,
              zIndex: -20,
            }}
          >
            <source src="images/chart.mp4" type="video/mp4" />
          </video>
          <div className="w-[50%] ">
            <form>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-blue-900"
                >
                  Username
                </label>
                <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="off"
                  required
                  className="relative block w-full mt-2 appearance-none rounded-none bg-transparent
                 border border-gray-300 px-3  py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-blue-900"
                >
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  onKeyDown={handleKeyDown}
                  id="password"
                  name="password"
                  type="Password"
                  autoComplete="off"
                  required
                  className="relative block w-full mt-3 appearance-none rounded-none bg-transparent autofill:bg-white
                                      border border-gray-300 px-3  py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mt-5">
                <button
                  onClick={handleLogin}
                  type="button"
                  className="group relative flex w-full justify-center border border-transparent
               bg-blue-900 py-2 px-4 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="w-[50%]">
            <div className="">
              <a href="#" className="hover:text-blue-500 text-slate-700">
                <span>Forgotten your username or password? </span>
              </a>
            </div>

            {!adminLogin && (
              <div className="mt-3 cursor-pointer">
                <Link href={"/register"}>
                  <button
                    className="group relative flex w-full justify-center border border-transparent
               bg-blue-900 py-2 px-4 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Register Faculty
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

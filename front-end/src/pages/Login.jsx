import React from "react";
import Logo from "../img/logo.png";

export default function Login() {
  return (
    <body className="flex justify-center items-center min-h-screen">
      <div className="border-[2px] border-gray-300 rounded-[10px] w-[35%] h-max flex flex-col items-center">
        <img src={Logo} className="w-[32vw] my-[100px]" alt="logo" />
        <form className="flex flex-col justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Email"
            className="border-[#FFB26B] border-[1px] pl-[15px] w-[25vw] h-[6vh]"
          />
          <input
            type="text"
            placeholder="Password"
            className="border-[#FFB26B] border-[1px] pl-[15px] w-[25vw] h-[6vh]"
          />
          <button type="submit" className="bg-[#FF7B54] text-white font-bold w-[20vw] rounded-md mt-[15px] mb-[27px] h-[5vh]">Login</button>
        </form>
      </div>
    </body>
  );
}

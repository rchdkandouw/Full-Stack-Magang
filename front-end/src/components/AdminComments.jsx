import React from "react";

export default function AdminComments() {
  return (
    <body>
      <div className="flex flex-col w-[100%] border-[1px] border-gray-300 rounded-[5px] py-[20px] pl-[15px]">
        <p className="text-[2vw] font-bold">Richard</p>
        <p className="font-bold text-gray-400">6th May 2022</p>
        <p>Good post</p>
        <div className="flex flex-row gap-5 justify-end mr-[30px] text-white">
            <button className="bg-sky-500 w-[15vw] rounded-2xl font-bold text-center h-[6vh]">Edit</button>
            <button className="bg-red-500 w-[15vw] rounded-2xl font-bold text-center h-[6vh]">Delete</button>
        </div>
            
      </div>
    </body>
  );
}

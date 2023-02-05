import React from "react";
import AdminComments from "../components/AdminComments";

export default function PortalListingComment() {
  return (
    <body className="p-[30px]">
      <div className="mt-[3vh] flex flex-row justify-between text-[#FF7B54] mb-[20px]">
        <p>List of Comments</p>
        <p>Logout</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[70%] border-[1px] border-gray-300 rounded-[5px] pt-[10px] pl-[26px] pr-[26px] pb-[26px] mb-[10px]">
          <p className="font-bold mt-[1vh] text-[3vw] pl-[10px]">List of Comments</p>
          <div className="mt-[3vh] flex flex-col gap-4">
            <AdminComments />
            <AdminComments />
          </div>
        </div>
      </div>
    </body>
  );
}

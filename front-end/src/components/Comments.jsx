import React from "react";

export default function Comments(props) {
  const { name, comment} = props;

  return (
    <body>
      <div className="flex flex-col w-[100%] border-[1px] border-gray-300 rounded-[5px] py-[20px] pl-[15px]">
        <p className="text-[2vw] font-bold text-[#FF7B54]">{name}</p>
        <p className="font-bold text-gray-400">6th May 2022</p>
        <p>{comment}</p>
      </div>
    </body>
  );
}



import React from "react";
import { useState } from "react";

export default function EditComment() {
  const [user, setUser] = useState("Richard");
  const [comment, setComment] = useState(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, sunt."
  );
  const changeUser = (event) => {
    setUser(event.target.value);
  };
  const changeComment = (event) => {
    setComment(event.target.value);
  };

  return (
    <body className="p-[20px]">
      <div className="mt-[5vh] flex flex-row justify-between text-[#FF7B54] mb-[20px]">
        <p>List of Comments</p>
        <p>Logout</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[95%] border-[1px] border-gray-300 rounded-[5px] pt-[10px] pl-[10px] pr-[10px] pb-[35px] mb-[10px]">
          <p className="font-bold text-[3vw]">Edit Comment</p>
          <div className="flex flex-col gap-3">
            <form className="flex flex-col gap-3 mt-[15px]">
              <input
                onChange={changeUser}
                value={user}
                className="border-black border-[1px] pl-[8px] w-[40vw]"
              />
              <input
                onChange={changeComment}
                value={comment}
                className="border-black border-[1px] pl-[8px] w-[80vw] h-[11vh]"
              />
              <button
                type="submit"
                className="bg-[#FF7B54] rounded-md text-white w-[25vw] mt-[30px] font-bold h-[5vh]"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}

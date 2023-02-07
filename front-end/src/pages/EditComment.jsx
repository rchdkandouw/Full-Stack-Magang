import React from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditComment() {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  React.useEffect(()=>{
    axios.get(`http://localhost:4000/Get/${id}`).then((result) => {
      console.log(result);
      setUser(result.data.name);
      setComment(result.data.comment);
    });
  }, [id]);

  const changeUser = (event) => {
    setUser(event.target.value);
  };
  const changeComment = (event) => {
    setComment(event.target.value);
  };
  const update = (e) => {
    e.preventDefault();
    const body = {
      name: user,
      comment: comment,
    };
    // eslint-disable-next-line no-undef
    axios.patch(`http://localhost:4000/update/${id}`, body).then((result) => {
      console.log(result);
      window.location.href = `/list/comments/`;
    });
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
            <form className="flex flex-col gap-3 mt-[15px]" onSubmit={update}>
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

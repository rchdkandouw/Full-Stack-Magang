import axios from "axios";
import React from "react";

export default function AdminComments(props) {
  const { name, comment, id } = props;
  const Delete = () => {
    axios.delete(`http://localhost:4000/delete/${id}`).then((result) => {
      console.log(result);
      window.location.reload();
    });
  };
  const Update = () => {
    window.location.href = `/edit/comments/${id}`;
  };
  return (
    <body>
      <div className="flex flex-col w-[100%] border-[1px] border-gray-300 rounded-[5px] py-[20px] pl-[15px]">
        <p className="text-[2vw] font-bold">{name}</p>
        <p className="font-bold text-gray-400">6th May 2022</p>
        <p>{comment}</p>
        <div className="flex flex-row gap-5 justify-end mr-[30px] text-white">
          <button
            className="bg-sky-500 w-[15vw] rounded-2xl font-bold text-center h-[6vh]"
            onClick={Update}
          >
            Edit
          </button>
          <button
            className="bg-red-500 w-[15vw] rounded-2xl font-bold text-center h-[6vh]"
            onClick={Delete}
          >
            Delete
          </button>
        </div>
      </div>
    </body>
  );
}

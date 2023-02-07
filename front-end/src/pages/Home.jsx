import React from "react";
import Logo from "../img/logo.png";
import Comments from "../components/Comments";
import axios from "axios";

const x = Math.floor(Math.random() * 10);
const y = Math.floor(Math.random() * 10);
export default function Home() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:4000/list").then((result) => {
      setData(result.data);
    });
  }, []);
  const [name, setName] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [captcha, setCaptcha] = React.useState(0);
  const validate = () => {
    if (captcha === x + y) {
      return true;
    } else {
      return false;
    }
  };
  const submit = (e) => {
    e.preventDefault();
    const body = {
      name: name,
      comment: comment,
    };
    if (validate()) {
      axios
        .post("http://localhost:4000/comment", body)
        .then((result) => {
          console.log(result);
          window.location.reload();//Untuk Tekan Button Auto Reload
        })
        .catch((error) => console.log(error));
    } else {
      console.log("captcha false");
    }
  };
  return (
    <body className="w-screen min-h-screen flex flex-col items-center">
      <div>
        <img alt="logo" src={Logo} className=" w-[20vw] my-[20px] mt-[3vh]" />
      </div>
      <div className="mt-[3vh] w-[60%] border-[1px] border-gray-300 rounded-[5px] pt-[10px] pl-[25px] pr-[100px] pb-[45px] mb-[15px]">
        <p className="font-bold text-[3vw]">My Article</p>
        <p className="text-gray-400 font-semibold text-[1.5vw]">3 June 2003</p>
        <p className="mt-[3vh] text-[1.5vw]">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <div className="flex flex-col justify-start w-[60%] border-[1px] border-gray-300 rounded-[5px] pt-[10px] pl-[25px] pr-[10px] pb-[45px] mb-[15px]">
        <p className="font-bold text-[3vw]">Add your comment</p>
        <form className="flex flex-col gap-3 mt-[15px]" onSubmit={submit}>
          <input
            type="text"
            placeholder="Your name ..."
            className="border-black border-[1.5px] pl-[10px] w-[30vw] h-[6vh]"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Your comment ..."
            className="border-black border-[1.5px] pl-[10px] w-[50vw] h-[10vh]"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <div className="flex flex-row gap-2">
            <input
              type="text"
              placeholder="Captcha ..."
              className="border-black border-[1.5px] pl-[10px] w-[30vw] h-[6vh]"
              onChange={(e) => {
                setCaptcha(parseInt(e.target.value));
              }}
            />
            <p className="font-bold bg-slate-200 w-[19.5vw] pl-[15px] mt-[1vh]">
              {" "}
              What is {x} + {y}?
            </p>
          </div>
          <button
            type="submit"
            className="bg-[#FF7B54] rounded-md text-white w-[15vw] mt-[20px] h-[5vh]"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex flex-col justify-start w-[60%] border-[1px] border-gray-300 rounded-[5px] pt-[10px] pl-[25px] pr-[26px] pb-[45px] gap-2">
        <p className="font-bold text-[3vw] mb-[20px]">Comments ({data.length})</p>
        {/* data.lenght untuk update jumlah data pada keterangan comment */}
        {
          data.map((item) => {
            return <Comments name={item.name} comment={item.comment} />;
          })
        }
      </div>
    </body>
  );
}

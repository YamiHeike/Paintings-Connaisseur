import "../styles/Card.css";
import AnsForm from "./AnsForm";
import { useId } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import scoreSlice, { increment, decrement } from "../reducers/scoreSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorCard } from "./errorCard";

function Card({ imgList }) {
  let id = useId();
  const newImgList = imgList.map((itm) => {
    return {
      ...itm,
      key: id,
    };
  });

  const dispatch = useDispatch();
  const score = useSelector((state) => state.score.score);
  const dataLength = newImgList.length;
  const randNum = Math.floor(Math.random() * dataLength);
  const [dataArr, setDataArr] = useState(dataLength);

  //Game logic, to be readjusted
  const submitForm = (arr) => {
    if (
      arr.title.toLowerCase() === newImgList[randNum].title.toLowerCase() &&
      arr.artist.toLowerCase() === newImgList[randNum].artist.toLowerCase()
    ) {
      toast.success("Congrats! Correct answer!", {
        position: "bottom-right",
      });
      newImgList.filter((itm) => newImgList[itm] !== newImgList[randNum]);
      setDataArr((prev) => prev - 1);
      dispatch(increment());
    } else if (
      arr.title.toLowerCase() === newImgList[randNum].title.toLowerCase() &&
      arr.artist.toLowerCase() === newImgList[randNum].originalLetters
    ) {
      toast.success("Congrats! Correct answer!", {
        position: "bottom-right",
      });
      newImgList.filter((itm) => newImgList[itm] !== newImgList[randNum]);
      setDataArr((prev) => prev - 1);
      dispatch(increment());
    } else {
      if (score > 0) {
        dispatch(decrement());
      }
      toast.error(
        <ErrorCard
          errAuthor={arr.artist}
          errTitle={arr.title}
          author={newImgList[randNum].artist}
          title={newImgList[randNum].title}
        />,
        {
          position: "bottom-right",
          autoClose: 10000,
          icon: false,
        }
      );
    }
  };

  return (
    <div className="Card bg-white py-2 px-2 rounded shadow-m my-2 md:my-6 max">
      <>
        <img
          src={newImgList[randNum].src}
          className="painting max-h-[50rem] w-full object-cover object-center shadow-md"
        />
        <AnsForm submitFunc={submitForm} />
        <ToastContainer />
      </>
    </div>
  );
}

export default Card;

import "../styles/Card.css";
import AnsForm from "./AnsForm";
import { useId } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import scoreSlice, { increment, decrement } from "../reducers/scoreSlice";

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

  const submitForm = (arr) => {
    if (
      arr.title.toLowerCase() === newImgList[randNum].title.toLowerCase() &&
      arr.artist.toLowerCase() === newImgList[randNum].artist.toLowerCase()
    ) {
      alert("Congrats! Correct answer!");
      newImgList.filter((itm) => newImgList[itm] !== newImgList[randNum]);
      setDataArr((prev) => prev - 1);
      dispatch(increment());
    } else if (
      arr.title.toLowerCase() === newImgList[randNum].title.toLowerCase() &&
      arr.artist.toLowerCase() === newImgList[randNum].originalLetters
    ) {
      alert("Congrats! Correct answer!");
      newImgList.filter((itm) => newImgList[itm] !== newImgList[randNum]);
      setDataArr((prev) => prev - 1);
      dispatch(increment());
    } else {
      if (score > 0) {
        dispatch(decrement());
      }
      alert(
        `The correct answer was "${newImgList[randNum].title}" by ${newImgList[randNum].artist}. :(`
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
      </>
    </div>
  );
}

export default Card;

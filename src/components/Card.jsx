import "../styles/Card.css";
import AnsForm from "./AnsForm";
import { useId } from "react";
import { useState } from "react";

function Card({ imgList }) {
  let id = useId();
  const newImgList = imgList.map((itm) => {
    return {
      ...itm,
      key: id,
    };
  });

  const submitForm = (arr) => {
    if (
      arr.title.toLowerCase() === newImgList[randNum].title.toLowerCase() &&
      arr.artist.toLowerCase() === newImgList[randNum].artist.toLowerCase()
    ) {
      alert("Congrats! Correct answer!");
      newImgList.filter((itm) => newImgList[itm] !== newImgList[randNum]);
      setDataArr((prev) => prev - 1);
      setScore((prev) => prev++);
    } else if (
      arr.title.toLowerCase() === newImgList[randNum].title.toLowerCase() &&
      arr.artist.toLowerCase() === newImgList[randNum].originalLetters
    ) {
      alert("Congrats! Correct answer!");
      newImgList.filter((itm) => newImgList[itm] !== newImgList[randNum]);
      setDataArr((prev) => prev - 1);
      setScore((prev) => prev++);
    } else {
      alert(
        `The correct answer was "${newImgList[randNum].title}" by ${newImgList[randNum].artist}. :(`
      );
    }
  };

  const dataLength = newImgList.length;
  const randNum = Math.floor(Math.random() * dataLength) + 1;
  const [dataArr, setDataArr] = useState(dataLength);
  const [score, setScore] = useState(0);

  return (
    <div className="Card bg-white py-2 px-2 rounded shadow-m my-2 md:my-6">
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

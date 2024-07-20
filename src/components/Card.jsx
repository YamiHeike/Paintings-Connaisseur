import "../styles/Card.css";
import AnsForm from "./AnsForm";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function Card({ imgList }) {
  const newImgList = imgList.map((itm) => {
    return {
      ...itm,
      key: uuid(),
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
      setScore(prev + 1);
    } else if (
      arr.title.toLowerCase() === newImgList[randNum].title.toLowerCase() &&
      arr.artist.toLowerCase() === newImgList[randNum].originalLetters
    ) {
      alert("Congrats! Correct answer!");
      newImgList.filter((itm) => newImgList[itm] !== newImgList[randNum]);
      setDataArr((prev) => prev - 1);
      setScore(prev + 1);
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
    <div className="Card">
      <>
        <img src={newImgList[randNum].src} className="painting" />
        <AnsForm submitFunc={submitForm} />
      </>
    </div>
  );
}

export default Card;

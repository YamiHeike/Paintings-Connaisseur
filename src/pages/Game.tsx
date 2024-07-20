import React from "react";
import Card from "../components/Card";
import PaintingsArr from "../utils/PaintingsArr";

export const Game = () => {
  return (
    <>
      <div className="bg-white w-fit px-2 py-2 mx-2 my-2">
        <p>Current score:</p>
      </div>
      <Card imgList={PaintingsArr} />
    </>
  );
};

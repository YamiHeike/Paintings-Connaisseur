import React from "react";
import Card from "../components/Card";
import PaintingsArr from "../utils/PaintingsArr";

export const Game = () => {
  return (
    <>
      <Card imgList={PaintingsArr} />
    </>
  );
};

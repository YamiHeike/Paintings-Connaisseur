import React from "react";
import Card from "../components/Card";
import { ScoreKeeper } from "../components/ScoreKeeper";
import PaintingsArr from "../utils/PaintingsArr";

export const Game = () => {
  return (
    <>
      <ScoreKeeper />
      <Card imgList={PaintingsArr} />
    </>
  );
};

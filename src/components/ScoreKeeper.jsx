import { useSelector } from "react-redux";

export const ScoreKeeper = () => {
  const score = useSelector((state) => state.score.score);
  return (
    <div className="bg-white w-fit px-2 py-2 mx-2 my-2">
      <p>{`Current score: ${score}`}</p>
    </div>
  );
};

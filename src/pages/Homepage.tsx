import React from "react";
import Header from "../ui/Header";
import { BsStars } from "react-icons/bs";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";
import PaintingsArr from "../utils/PaintingsArr";

export const Homepage = () => {
  const navigate = useNavigate();
  const startGame = () => {
    navigate(routes.GAME.path);
  };
  return (
    <>
      <div className="px-2 py-3 bg-black text-slate-100 flex justify-center items-center flex-col font-mono">
        <Header txt="Welcome to Paintings Connaisseur" />
        <h2>Let's get you started</h2>
      </div>
      <div className="rounded flex flex-col items-center justify-center sm:my-2 md:my-10 bg-white lg:w-8/12 md:w-9/12 mx-auto px-2 py-2 shadow-md sm:w-10/12">
        <img
          src={PaintingsArr[0].src}
          className="max-h-96 w-full object-cover"
        />
        <div className="my-2 text-center">
          <p>
            <BsStars className="inline-block text-yellow-500 mx-2" />
            The game will provide you a random painting from our paintings list
          </p>
          <p>
            <BsStars className="inline-block text-yellow-500 mx-2" />
            Fill in the title and the name of the author!
          </p>
        </div>
        <div className="text-center">
          <p>
            <span className="text-gray-100 bg-red-600 px-2 py-1">
              Carefeul!
            </span>{" "}
            Typos may invalidate your anwsears
          </p>
          <p>
            If you are lost, you can also check our cheetsheat in our
            <Link
              to={routes.WORKS.path}
              className="hover:text-blue-700 md:transition-all"
            >
              List of works
            </Link>{" "}
            page
            <BsStars className="inline-block mx-2 text-yellow-500" />
          </p>
        </div>
        <div className="text-center my-3">
          <Header txt="Are you ready?" />{" "}
          <Button text="BEGIN" onClick={startGame} />
        </div>
      </div>
    </>
  );
};

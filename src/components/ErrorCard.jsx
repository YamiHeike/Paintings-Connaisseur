import { GiCheckMark } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

export const ErrorCard = ({ errAuthor, errTitle, author, title }) => {
  return (
    <div className="px-3 text-center">
      <h3 className="font-bold text-red-600 text-2xl my-2">
        Incorrect answear!
      </h3>
      <p className="font-bold">
        <RxCross1 className="text-red-500 inline-block mr-2" />
        Your answear:
      </p>
      <p>
        {errTitle} - {errAuthor}
      </p>
      <p className="font-bold">
        <GiCheckMark className="text-green-400 inline-block mr-2" />
        Correct answear:
      </p>
      <p>
        {title} - {author}
      </p>
    </div>
  );
};

import PaintingsArr from "../utils/PaintingsArr";
import Button from "../components/Button";
import "./WorkList.css";

export const WorkList = () => {
  return (
    <div className="WorkList">
      {PaintingsArr.map((itm) => {
        return (
          <div className="Work">
            <h4>
              {" "}
              {`${itm.artist} - `}
              <i>{`${itm.title}`}</i>
            </h4>
            <img src={itm.src} />
          </div>
        );
      })}
    </div>
  );
};

export default WorkList;

import PaintingsArr from "./PaintingsArr";
import Button from "./Button";
import './WorkList.css';

function WorkList({onClickFunc}){
    return(
        <div className="WorkList">
            {
                PaintingsArr.map(itm => {
                    return (
                    <div class="Work">
                        <h4> {`${itm.artist} - `}<i>{`${itm.title}`}</i></h4>
                        <img src={itm.src}/>
                    </div>)
                })
            }
            <Button text={'Return to Homepage'} onClick={onClickFunc}/>
        </div>
    )
}

export default WorkList;
import palette from './assets/palette.png';
import './Navbar.css';
import Header from './Header';
import {v4 as uuid} from 'uuid';


function Navbar({listArray}){
   

   return (
   <div className="Navbar">
        <img src={palette} />
        <Header txt="Paintings Connaisseur"/>
        <ul>
            {listArray.map((itm) => <li key={uuid()} onClick={itm.func}>{itm.header}</li>)}
        </ul>
    </div>
   )
}

export default Navbar;
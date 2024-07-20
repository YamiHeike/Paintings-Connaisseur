import palette from "../assets/palette.png";
import "../styles/Navbar.css";
import Header from "../ui/Header";
import { NavLink } from "react-router-dom";
import { routes } from "../routes/routes";

const pcNavLink = ({ to, children }) => {
  return <NavLink to={to}>{children}</NavLink>;
};

function Navbar() {
  return (
    <div className="Navbar">
      <img src={palette} />
      <Header txt="Paintings Connaisseur" />
      <ul>
        <li>
          <NavLink to={routes.HOME.path}>HOME</NavLink>
        </li>
        <li>
          <NavLink to={routes.GAME.path}>GAME</NavLink>
        </li>
        <li>
          <NavLink to={routes.WORKS.path}>LIST OF WORKS</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

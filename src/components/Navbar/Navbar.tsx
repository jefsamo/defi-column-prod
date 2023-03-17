import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import D from "../../assets/D.png";
import Column from "../../assets/column.png";
import "./navbar.scss";

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <div className="navbar-container">
      <div className="navbar-1">
        <div className="left-menu">
          <div className="hamburger">
            <Burger
              opened={opened}
              onClick={toggle}
              size={26}
              className="ham"
            />
          </div>
          <div className="nav-links">
            <CiSearch className="search-icon" />
            <li>
              <Link to="/">Defi</Link>
            </li>
            <li>
              <Link to="/">NFTs</Link>
            </li>
            <li>
              <Link to="/">Bullrun</Link>
            </li>
          </div>
        </div>
        <div className="center-menu">
          <img src={D} alt="" />
          <img src={Column} alt="" className="column" />
        </div>
        <div className="right-menu">
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

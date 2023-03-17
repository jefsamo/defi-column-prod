import { Center, Divider, Space } from "@mantine/core";
import { Link } from "react-router-dom";
import "./footer.scss";
import { RxTwitterLogo } from "react-icons/rx";
import { FiInstagram } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";
import D from "../../assets/D.png";
import Column from "../../assets/column.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="inner-footer">
        <div className="grid-items">
          <div className="grid-item">
            <h2>About</h2>
            <Space h="md" />
            <div className="grid-links">
              <Link to="">Careers</Link>
              <Space h="md" />
              <Link to="">Our history</Link>
            </div>
          </div>
          <div className="grid-item">
            <h2>Contact</h2>
            <Space h="md" />
            <div className="grid-links">
              <Link to="">Help Center</Link>
              <Space h="md" />
              <Link to="">Contact Us</Link>
              <Space h="md" />
              <Link to="">Press</Link>
            </div>
          </div>
          <div className="grid-item">
            <h2>Guides</h2>
            <Space h="md" />
            <div className="grid-links">
              <Link to="">Beginners Guide</Link>
              <Space h="md" />
              <Link to="">Web3 Defi Projects</Link>
              <Space h="md" />
              <Link to="">Defi Trends</Link>
            </div>
          </div>
          <div className="grid-item">
            <h2>Subscription</h2>
            <Space h="md" />
            <div className="grid-links">
              <Link to="">Podcasts</Link>
              <Space h="md" />
              <Link to="">Newsletters</Link>
            </div>
          </div>
          <div className="grid-item">
            <h2>Follow</h2>
            <Space h="md" />
            <div className="social-links">
              <Link to="">
                <RxTwitterLogo size={18} />
              </Link>
              <Link to="">
                <FiInstagram size={18} />
              </Link>
              <Link to="">
                <BsYoutube size={18} />
              </Link>
            </div>
          </div>
        </div>
        <Space h="md" />
        <Space h="md" />
        <Divider />
        <Space h="md" />
        <div className="bottom-footer">
          <div className="bottom-flex">
            <div className="left">
              {/* <img src={D} alt="" style={{ color: "white" }} />
              <img src={Column} alt="" className="column" /> */}
              <h2>D:</h2>
            </div>
            <div className="right">
              <p>Privacy policy</p>
              <p>Advertising Guidelines</p>
              <p>Terms &amp; Conditions</p>
              <p>Disclosure</p>
              <p>Sitemap</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

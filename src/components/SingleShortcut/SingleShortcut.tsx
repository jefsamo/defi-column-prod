import "./singleShortcut.scss";
import Shortcut from "../../assets/shortcut.png";
import { Space } from "@mantine/core";
import { Link } from "react-router-dom";

const SingleShortcut = () => {
  return (
    <Link to="" style={{ textDecoration: "none" }}>
      <div className="single-shortcut">
        <img src={Shortcut} alt="" />
        <p className="source-img">MOTION DESIGN/ STUDIO HUSLOW/GETTY</p>
        <Space h="md" />
        <h2 className="title">SUI Airdrop, Why You Should get It</h2>
        <Space h="xs" />
        <p className="excerpts">
          With the exception of Aptos, the airdrop meta has been lacking
          seriously. Almost dead.
        </p>
        <Space h="md" className="space" />
        <p className="author">Olawale Shopeyin</p>
      </div>
    </Link>
  );
};

export default SingleShortcut;

import "./singleShortcut.scss";
import Shortcut from "../../assets/shortcut.png";
import { Space } from "@mantine/core";
import { Link } from "react-router-dom";
import { Story } from "../../utils/constants";

const SingleShortcut = ({ story }: Story) => {
  return (
    <Link to={`/post/${story.slug}`} style={{ textDecoration: "none" }}>
      <div className="single-shortcut">
        <img src={Shortcut} alt="" />
        <p className="source-img">MOTION DESIGN/ STUDIO HUSLOW/GETTY</p>
        <Space h="md" />
        <h2 className="title">{story.title}</h2>
        <Space h="xs" />

        <Space h="md" className="space" />
        <p className="author">Olawale Shopeyin</p>
      </div>
    </Link>
  );
};

export default SingleShortcut;

import "./preview.scss";
import PreviewImg from "../../assets/preview.png";
import { Divider, Space } from "@mantine/core";
import { Link } from "react-router-dom";
import { Story } from "../../utils/constants";

const Preview = ({ story }: Story) => {
  console.log(story);
  return (
    <Link to={`post/${story.slug}`} style={{ textDecoration: "none" }}>
      <div className="preview-container">
        <div className="preview">
          <div className="left-preview">
            <h2 className="title">{story.title}</h2>
            <p className="author">{story.author.name}</p>
          </div>
          <div className="right-preview">
            <img src={PreviewImg} alt="preview" />
          </div>
        </div>
        <Space h="md" />
        <Divider size="xs" color="#F3F3F3;" />
        <Space h="md" />
      </div>
    </Link>
  );
};

export default Preview;

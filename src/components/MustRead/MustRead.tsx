import { Divider, Space } from "@mantine/core";
import { Link } from "react-router-dom";
import Writer from "../Writer/Writer";
import SingleMustRead from "../SingleMustRead/SingleMustRead";
import "./mustRead.scss";
import SingleDefi from "../SingleDefi/SingleDefi";

const MustRead = () => {
  return (
    <div className="container">
      <div className="must-read">
        <div className="left-mustread">
          <h2 className="title">Must read</h2>
          <Space h="md" />
          <Divider size="xs" color="#F3F3F3;" />
          <Space h="md" />
          <SingleMustRead />
          <SingleMustRead />
          <SingleMustRead />
          <SingleMustRead />
          <SingleMustRead />
          <SingleMustRead />
        </div>
        <div className="right-mustread">
          <div className="header">
            <h2 className="title">Writers</h2>
            <Link to="">View All</Link>
          </div>
          <Space h="md" />
          <Divider size="xs" color="#F3F3F3;" />
          <Space h="md" />
          <Writer />
          <Writer />
          <Writer />
          <Writer />
          <Writer />
          <div className="header">
            <h2 className="title">Popular</h2>
            <Link to="">View All</Link>
          </div>
          <Space h="md" />
          <Divider size="xs" color="#F3F3F3;" />
          <Space h="md" />
          <SingleDefi />
          <SingleDefi />
          <SingleDefi />
          <SingleDefi />
        </div>
      </div>
    </div>
  );
};

export default MustRead;

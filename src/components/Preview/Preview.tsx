import React from "react";
import "./preview.scss";
import PreviewImg from "../../assets/preview.png";
import { Center, Divider, Space } from "@mantine/core";
import { Link } from "react-router-dom";

const Preview = () => {
  return (
    <Link to="" style={{ textDecoration: "none" }}>
      <div className="preview-container">
        <div className="preview">
          <div className="left-preview">
            <h2 className="title">
              Ai Art and its Effect on the NFT ecosystem
            </h2>
            <p className="author">Olawale Shopeyin</p>
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

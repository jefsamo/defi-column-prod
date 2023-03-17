import { Divider, Space } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import Popular from "../../assets/popular.png";
import "./singleDefi.scss";

const SingleDefi = () => {
  return (
    <>
      <Link to="" style={{ textDecoration: "none" }}>
        <div className="single-defi">
          <p className="category">NFTs</p>
          <Space h="sm" />
          <div className="main-content">
            <div className="left-content">
              <h3>Bitcoin NFTs what and why?</h3>
              <p className="author">Michael Shopeyin</p>
            </div>
            <div className="right-content">
              <img src={Popular} alt="" />
            </div>
          </div>
        </div>
      </Link>
      <Space h="md" />
      <Divider size="xs" color="#F3F3F3;" />
    </>
  );
};

export default SingleDefi;

import React from "react";
import "./singleMustRead.scss";
import Shortcut from "../../assets/shortcut.png";
import { Divider, Space } from "@mantine/core";
import { Link } from "react-router-dom";

const SingleMustRead = () => {
  return (
    <div className="single-mustread">
      <Link to="" style={{ textDecoration: "none" }}>
        <div className="mustread-content">
          <img src={Shortcut} alt="" />
          <div className="details">
            <div className="inner-details">
              <h2 className="title">
                Why it is important to invest in NFTs and why you must do it
                now.
              </h2>
              <div className="author-date">
                <p className="author">Michael Shopeyin</p>
                <p className="date">March 2023</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Space h="md" />
      <Divider size="xs" color="#F3F3F3;" />
      <Space h="md" />
    </div>
  );
};

export default SingleMustRead;

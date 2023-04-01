import { Divider, Space } from "@mantine/core";
import { Link } from "react-router-dom";
import Writer from "../Writer/Writer";
import SingleMustRead from "../SingleMustRead/SingleMustRead";
import "./mustRead.scss";
import SingleDefi from "../SingleDefi/SingleDefi";
import { baseUrl } from "../../utils/constants";
import { userDataType } from "../../utils/userData";
import { useEffect, useState } from "react";
import axios from "axios";

const MustRead = () => {
  const [writers, setWriters] = useState<userDataType[] | []>([]);

  useEffect(() => {
    const getWriters = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/v1/users/writers`);
        setWriters(res.data.data.users);
      } catch (error) {}
    };

    getWriters();
  }, []);
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
          {writers.slice(0.4).map((writer: userDataType) => {
            return <Writer key={writer._id} writer={writer} />;
          })}
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

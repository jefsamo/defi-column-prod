import { Divider, Space } from "@mantine/core";
import axios from "axios";
import { useEffect } from "react";
import Headline from "../../components/Headline/Headline";
import MustRead from "../../components/MustRead/MustRead";
import NftsDefi from "../../components/NftsDefi/NftsDefi";
import Shortcut from "../../components/Shortcut/Shortcut";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="headline-overview">
        <Headline />
      </div>
      <div className="shortcut-overview">
        <Space h="md" />
        <div className="container">
          <Divider size="xs" color="#F3F3F3;" />
        </div>
        <Space h="md" />
        <Shortcut />
      </div>
      <div className="nfts-defi-overview">
        <Space h="md" />
        <div className="container">
          <Divider size="xs" color="#F3F3F3;" />
        </div>
        <Space h="md" />
        <Space h="md" />
        <NftsDefi />
      </div>
      <div className="mustread-overview">
        <Space h="md" />
        <Space h="md" />
        <MustRead />
      </div>
    </div>
  );
};

export default Home;

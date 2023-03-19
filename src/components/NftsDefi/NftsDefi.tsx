import { Divider, Center, Space } from "@mantine/core";
import "./nftsDefi.scss";
import Article from "../../assets/article.png";
import SingleDefi from "../SingleDefi/SingleDefi";

const NftsDefi = () => {
  return (
    <div className="container">
      <div className="nfts-defi">
        <div className="left-defi">
          <div className="left-inner-content">
            <h2 className="title">SUI Airdrop, Why You Should get It</h2>
            <Space h="md" />
            <p className="excerpts">
              With the exception of Aptos, the airdrop meta has been lacking
              seriously. Almost dead. This has resulted in the frenzy
              surrounding the most anticipated airdrop in recent times, the Sui
              Airdrop
            </p>
            <Space h="md" />
            <p className="author">Michael Shopeyin</p>
          </div>
          <div className="right-inner-content">
            <img src={Article} alt="" />
          </div>
        </div>
        <Center>
          <Divider orientation="vertical" size="xs" color="#F3F3F3;" />
        </Center>
        <div className="right-defi">
          <h1 className="title">NFTs &amp; DEFI</h1>
          <SingleDefi />
          <SingleDefi />
          <SingleDefi />
        </div>
      </div>
    </div>
  );
};

export default NftsDefi;

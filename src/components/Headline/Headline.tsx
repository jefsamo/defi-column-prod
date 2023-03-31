import "./headline.scss";
import { Center, Divider } from "@mantine/core";
import HeadlineImg from "../../assets/headline.png";
import Preview from "../Preview/Preview";

const Headline = () => {
  return (
    <div className="container">
      <div className="headline">
        <div className="left-headline">
          <img src={HeadlineImg} alt="" className="headline-img" />
          <div className="title-author">
            <h2 className="title">
              TALKING NFTS, CRYPTO AND DECENTRALIZED FINANCE IN THIS BEAR RUN
            </h2>
            <p className="author">Michael Shopeyin</p>
          </div>
          <p className="source-img">
            PHOTO ILLUSTRATION BY STUDIO HUSLOW / GETTY
          </p>
        </div>
        <Center className="center-mantine">
          <Divider orientation="vertical" size="xs" color="#F3F3F3;" />
        </Center>
        <div className="right-headline">
          <Preview />
          <Preview />
          <Preview />
          <Preview />
        </div>
      </div>
    </div>
  );
};

export default Headline;

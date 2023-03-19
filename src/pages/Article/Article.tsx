import "./Article.scss";
import Beginner from "../../assets/beginner.png";
import SaveImg from "../../assets/archive.png";
import { Divider, Space } from "@mantine/core";
import Insta from "../../assets/instagram.png";
import Printer from "../../assets/printer.png";
import FB from "../../assets/facebook2.png";
import { Link } from "react-router-dom";
import SingleMustRead from "../../components/SingleMustRead/SingleMustRead";

const Article = () => {
  return (
    <div className="article">
      <div className="banner">
        <img src={Beginner} alt="" className="banner-img" />
        <h1 className="title">
          TALKING NFTS, CRYPTO AND DECENTRALIZED FINANCE IN THIS BEAR RUN
        </h1>
        <p>PHOTO ILLUSTRATION BY STUDIO HUSLOW / GETTY</p>
      </div>
      <div className="container">
        <div className="save-author">
          <div className="left">
            <p className="author">By Olawale Shopeyin</p>
            <Space h="xs" />
            <p className="date">March 2023</p>
          </div>
          <div className="right">
            <img src={SaveImg} alt="" />
          </div>
        </div>
        <div className="article-section">
          <div className="left-section">
            <p className="share">share our article</p>
            <div className="share-links">
              <div className="emoji">
                <div className="img-container">
                  <img src={Insta} alt="" />
                </div>
                <div className="img-container">
                  <img src={Printer} alt="" />
                </div>
                <div className="img-container">
                  <img src={FB} alt="" />
                </div>
                <div className="img-container">
                  <img src={Insta} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="inner-right">
              <p className="text">
                web3 space, everyone wanted a piece of that cake, facebook had
                just rebranded to meta and life was about to get tougher for
                just about anyone involved in that space, the grunts (grinders)
                were about to get a huge shock and projects which otherwise
                might have sold out were about to get an even bigger reveal.
                web3 space, everyone wanted a piece of that cake, facebook had
                just rebranded to meta and life was about to get tougher for
                just about anyone involved in that space, the grunts (grinders)
                were about to get a huge shock and projects which otherwise
                might have sold out were about to get an even bigger reveal.
                web3 space, everyone wanted a piece of that cake, facebook had
                just rebranded to meta and life was about to get tougher for
                just about anyone involved in that space, the grunts (grinders)
                were about to get a huge shock and projects which otherwise
                might have sold out were about to get an even bigger reveal.
                web3 space, everyone wanted a piece of that cake, facebook had
                just rebranded to meta and life was about to get tougher for
                just about anyone involved in that space, the grunts (grinders)
                were about to get a huge shock and projects which otherwise
                might have sold out were about to get an even bigger reveal.
                web3 space, everyone wanted a piece of that cake, facebook had
                just rebranded to meta and life was about to get tougher for
                just about anyone involved in that space, the grunts (grinders)
                were about to get a huge shock and projects which otherwise
                might have sold out were about to get an even bigger reveal.
                web3 space, everyone wanted a piece of that cake, facebook had
                just rebranded to meta and life was about to get tougher for
                just about anyone involved in that space, the grunts (grinders)
                were about to get a huge shock and projects which otherwise
                might have sold out were about to get an even bigger reveal. v
                web3 space, everyone wanted a piece of that cake, facebook had
                just rebranded to meta and life was about to get tougher for
                just about anyone involved in that space, the grunts (grinders)
                were about to get a huge shock and projects which otherwise
                might have sold out were about to get an even bigger reveal.
                web3 space, everyone wanted a piece of that cake, facebook had
                just rebranded to meta and life was about to get tougher for
                just about anyone involved in that space, the grunts (grinders)
                were about to get a huge shock and projects which otherwise
                might have sold out were about to get an even bigger reveal.
                web3 space, everyone wanted a piece of that cake, facebook had
                just rebranded to meta and life was about to get tougher for
                just about anyone involved in that space, the grunts (grinders)
                were about to get a huge shock and projects which otherwise
                might have sold out were about to get an even bigger reveal.
                web3 space, everyone wanted a piece of that cake, facebook had
                just rebranded to meta and life was about to get tougher for
                just about anyone involved in that space, the grunts (grinders)
                were about to get a huge shock and projects which otherwise
                might have sold out were about to get an even bigger reveal.
              </p>
            </div>
          </div>
        </div>
        <div className="related-overview">
          <div className="related-header">
            <h1 className="more-articles">More Articles</h1>
            <Link to="/">View ALL</Link>
          </div>
          <Space h="md" />
          <Divider />
          <Space h="md" />
          <SingleMustRead />
          <SingleMustRead />
          <SingleMustRead />
        </div>
      </div>
    </div>
  );
};

export default Article;

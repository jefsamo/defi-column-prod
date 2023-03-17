import { Center, Divider, Space } from "@mantine/core";
import Headline from "../../components/Headline/Headline";
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
        <Divider size="xs" color="#F3F3F3;" />
        <Space h="md" />
        <Shortcut />
      </div>
    </div>
  );
};

export default Home;

import "./writer.scss";
import Astronaut from "../../assets/astronaut2.png";
import { Space } from "@mantine/core";
import { Link } from "react-router-dom";
import { userDataType } from "../../utils/userData";

type Writer = {
  writer: userDataType;
};

const Writer = ({ writer }: Writer) => {
  return (
    <>
      <Link to={`/writer/${writer.slug}`}>
        <div className="writer">
          <img src={Astronaut} alt="" className="writer-img" />
          <div className="writer-details">
            <p className="name">{writer.name}</p>
            <p className="desc">
              An Award winning journalist practicing journalism for the better
              part of the decade, a three time pulitzer winner.
            </p>
          </div>
        </div>
      </Link>
      <Space h="md" />
      <Space h="md" />
    </>
  );
};

export default Writer;

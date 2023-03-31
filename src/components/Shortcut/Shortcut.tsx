import { useStoriesContext } from "../../contexts/stories_context";
import SingleShortcut from "../SingleShortcut/SingleShortcut";
import "./shortcut.scss";

const Shortcut = () => {
  const { allStories, storiesLoading } = useStoriesContext();

  return (
    <div className="container">
      <div className="shortcut">
        {allStories.slice(0, 4).map((story) => {
          return <SingleShortcut key={story._id} story={story} />;
        })}
      </div>
    </div>
  );
};

export default Shortcut;

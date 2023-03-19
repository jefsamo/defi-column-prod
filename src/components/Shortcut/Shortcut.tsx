import SingleShortcut from "../SingleShortcut/SingleShortcut";
import "./shortcut.scss";

const Shortcut = () => {
  return (
    <div className="container">
      <div className="shortcut">
        <SingleShortcut />
        <SingleShortcut />
        <SingleShortcut />
        <SingleShortcut />
      </div>
    </div>
  );
};

export default Shortcut;

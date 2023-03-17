import { Space } from "@mantine/core";
import "./subscribe.scss";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="inner-subscribe">
        <h1>Subscribe to our Newsletter</h1>
        <Space h="md" />
        <p>Get daily news directly to your mail to always keep you updated.</p>
        <Space h="md" />
        <div className="input-box">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email address"
            className="input"
          />
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

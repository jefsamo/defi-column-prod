import { useRouteError } from "react-router-dom";

const Error = () => {
  const error: any = useRouteError();
  console.error(error);
  return <div>{error.statusText || error.message}</div>;
};

export default Error;

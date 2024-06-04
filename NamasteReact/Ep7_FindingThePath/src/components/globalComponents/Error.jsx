import { useRouteError } from "react-router-dom";
import Nav from "../navbar/Nav";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <Nav />
      <div>Something went wrong. {err.status}</div>
    </div>
  );
};

export default Error;

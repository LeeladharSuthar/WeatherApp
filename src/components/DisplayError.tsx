import { useContext } from "react";
import AppContext from "../context/AppContext";

const DisplayError = () => {
  const { errorResponse } = useContext(AppContext);
  return <div>{errorResponse && <p>{errorResponse.message}</p>}</div>;
};

export { DisplayError };

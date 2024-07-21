import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  return (
    <div className="px-4 sm:px-6 py-3">
      <h1>Algo salio mal 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Regresar</LinkButton>
    </div>
  );
}

export default Error;

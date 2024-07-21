import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 sm:my-16 text-center">
      <h1 className="text-xl md:text-3xl font-semibold text-center mb-8">
        La mejor pizza.
        <br />
        <span className="text-yellow-500">
          Directo del horno, directo a ti.
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continuar con la orden, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;

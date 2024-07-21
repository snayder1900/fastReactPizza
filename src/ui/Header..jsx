import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

export const Header = () => {
  return (
    <header className="bg-yellow-400 uppercase py-3 px-4 sm:px-6 border-b border-stone-200 flex items-center justify-between">
      <Link className="tracking-widest" to="/">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
};

export default Header;

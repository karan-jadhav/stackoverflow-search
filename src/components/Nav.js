import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav className="flex justify-between p-5 border-b-2 shadow-md">
        <div className="">
          <Link to="/">MySite</Link>
        </div>
        <ul className="flex flex-row">
          <li className="pr-2">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

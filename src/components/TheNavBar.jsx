import { Link } from "react-router-dom";

const TheNavBar = () => {
  return (
    <div className="bg-blue-600 text-white flex justify-between items-center p-1">
      <h2 className="p-3 text-xl font-semibold">Deva King</h2>
      <ul className="flex p-3 gap-2 cursor-pointer">
        <li className=" bg-black px-3 py-1 rounded font-semibold hover:bg-transparent">
          <Link to={"/"}>Home</Link>
        </li>
        <li className=" bg-black px-3 py-1 rounded font-semibold hover:bg-transparent">
          <Link to={"/about"}>About</Link>
        </li>
        <li className=" bg-black px-3 py-1 rounded font-semibold hover:bg-transparent">
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li className=" bg-black px-3 py-1 rounded font-semibold hover:bg-transparent">
          <Link to={"/currency"}>Currency APP</Link>
        </li>
      </ul>
    </div>
  );
};

export default TheNavBar;

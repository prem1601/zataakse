import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <div className="shadow-lg py-6 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-3 align-middle">
          <div className="logo">
            <h1 className="font-bold text-2xl">FlatLogic</h1>
          </div>
          <div className="menu">
            <ul className="flex justify-between gap-2">
              {["Home", "Pages", "Shop", "Block"].map((data) => (
                <li key={data} className="text-lg">
                  {data}
                </li>
              ))}
            </ul>
          </div>
          <div className="icons">
            <ul className="flex justify-end gap-10">
              {[CiSearch, FaUser, BsCart3].map((Data, i) => (
                <li key={i} className="">
                  <Data className="w-6 h-6" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

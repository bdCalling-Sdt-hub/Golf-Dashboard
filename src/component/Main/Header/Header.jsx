/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";
import { imageBaseUrl } from "../../../config/imageBaseUrl";
import { RiNotificationFill } from "react-icons/ri";

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="w-full px-5 py-3.5 bg-[#f1bd19] flex justify-between items-center text-white sticky top-0 left-0 z-10">
      <div className="flex items-center gap-3">
        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={toggleSidebar}
        >
          <FiMenu />
        </button>
      </div>

      <div className="flex justify-between items-center gap-8">
        <Link to={"/notification"}>
          <h1 className="relative text-[#f1bd19] p-2 rounded-full bg-white">
            <RiNotificationFill className="size-8"  />{" "}
          </h1>
        </Link>
        <img
          onClick={() => navigate("/settings/personal-info")}
          src={`${imageBaseUrl}${user?.image?.url}`}
          className="size-12 rounded-full cursor-pointer"
        />
         <div className="hidden md:block">
          <h1 className="">Fletch Skinner</h1>
          <span className="">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

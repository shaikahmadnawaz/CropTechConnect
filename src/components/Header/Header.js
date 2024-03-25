import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="inPhone my-6">
      <div className="flex content-center items-center">
        <div className="flex items-center cursor-pointer ml-auto lg:ml-16">
          {/* <img
            onClick={() => navigate("/")}
            src={logo}
            className="logoWeb"
            alt=""
          /> */}
          <Link to="/">  <h3 className="text-md font-bold opacity-[.70]">CropTech Connect</h3></Link>
        
        </div>
        <div className="flex-2 w-6/12 mx-auto">
          <ul className="flex items-around">
            <li
              onClick={() => navigate("/")}
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:opacity-90 lg:ml-7 ml-6 mr-1.5"
            >
              Home
            </li>
            
            <li
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:opacity-90 ml-6 mr-1.5"
              onClick={() => navigate("/crop")}
            >
              Crop Recommendation
            </li>
            <li
              onClick={() => navigate("/fertilizer")}
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:opacity-90 ml-6 mr-1.5"
            >
              Fertilizer Recommendation
            </li>
           
            <li
              onClick={() => navigate("/faqs")}
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:opacity-90 ml-6 mr-1.5"
            >
              FAQs
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

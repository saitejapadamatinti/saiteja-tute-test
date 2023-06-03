import React from "react";
import "./index.css";
import BreadCrumbs from "../Breadcrumbs";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="nav-items-container">
          <div className="nav-bar-container">
            <img className="nav-logo-mobile" alt="nav-logo" src="images/nav-logo.png" />
          </div>
          <div className="nav-bar-select-mobile">
            <select className="nav-bar-select-tab para-16px-semi white-color">
              <option>ProfileName</option>
              <option>My Assignment</option>
              <option>Chat with Mentor</option>
            </select>
          </div>
          <div className="nav-bar-div-desktop">
            <p className="in-active-color nav-bar-text-size">My Assignment</p>
            <p className="in-active-color nav-bar-text-size">
              Chat with Mentor
            </p>
            <select className="primary-color nav-bar-text-size nav-bar-select-desktop">
              <option>
                <img
                  alt="user-images"
                  src="images/user.png"
                  className="nav-user-icon"
                />
                ProfileName
              </option>
              <option>My Assignment</option>
              <option>Chat with Mentor</option>
            </select>
          </div>
        </div>
        <div className="breadcrumbs-div">
        <BreadCrumbs />
        </div>
      </div>
      {/* <div className="nav-main-div">
        <div className="nav-movile-div">
          <div className="nav-bar-mobile">
            <div className="">
              <img className="" alt="nav-logo" src="images/nav-logo.png" />
            </div>
            <div className="">
              <select className="nav-bar-select-tab para-16px-semi white-color">
                <option>ProfileName</option>
                <option>My Assignment</option>
                <option>Chat with Mentor</option>
              </select>
            </div>
          </div>
        </div>
        <div className="">
          <p className="in-active-color nav-bar-text-size">My Assignment</p>
          <p className="in-active-color nav-bar-text-size">Chat with Mentor</p>
          <select className="primary-color nav-bar-text-size nav-bar-select-desktop">
              <option>
              
                ProfileName
              </option>
              <option>My Assignment</option>
              <option>Chat with Mentor</option>
            </select>
        </div>
        <div className="bread-crumbs-nav">
          <BreadCrumbs />
        </div>
      </div> */}
    </>
  );
};

export default Navbar;

import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

const howDoesItWors = [
  {
    id: 1,
    head: "Invite your Friends",
    description: "Share the link tutedude.com with your friends",
    icon: "images/users.png",
  },
  {
    id: 1,
    head: "Invite your Friends",
    description: "Share the link tutedude.com with your friends",
    icon: "images/tag.png",
  },
  {
    id: 1,
    head: "Invite your Friends",
    description: "Share the link tutedude.com with your friends",
    icon: "images/₹.png",
  },
  {
    id: 1,
    head: "Invite your Friends",
    description: "Share the link tutedude.com with your friends",
    icon: "images/offer.png",
  },
  {
    id: 1,
    head: "Invite your Friends",
    description: "Share the link tutedude.com with your friends",
    icon: "images/wallet.png",
  },
];

const Home = () => {
  return (
    <div className="home-refer-earn-container">
      <div className="home-top-box-refer-div">
        <div className="home-earning-amount-card">
          <div>
            <p className="primary-color">Referral Earning</p>
            <h1 className="head-32px-semi">$2,500</h1>
          </div>
          <div>
            <p className="primary-color">Total Referrals</p>
            <h1 className="head-32px-semi">7</h1>
          </div>
          <div>
            <p className="primary-color">Total Referrals</p>
            <h1 className="head-32px-semi">$500</h1>
          </div>
          <div className="home-earning-card-button">
            <button className="primary-button">Withdraw Balance</button>
          </div>
        </div>
        <div className="section-margin home-reffer-main-div">
          <h2 className="head-24px-semibold primary-color">
            Your Referral Code
          </h2>
          <div className="gradient-border-color refferal-code-div">
            <p>E</p>
            <p>D</p>
            <p>C</p>
            <p>H</p>
            <p>5</p>
            <p>4</p>
          </div>
        </div>
      </div>
      <div className="section-margin">
        <h2 className="head-24px-semibold primary-color">Your Referral Code</h2>
        <div className="icons-main-container">
          {howDoesItWors.map((eachItem) => (
            <div className="each-icons-div">
              <div className="home-icon-circle">
                <img
                  className="home-icon-img"
                  alt={eachItem.id}
                  src={eachItem.icon}
                />
              </div>
              <div>
                <p className="para-16px-semi">{eachItem.head}</p>
                <p className="para-16px-regular font-light-color">
                  {eachItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-margin">
        <Link
          to="/friends-refferd"
          className="primary-color para-16px-semi home-footer-paras"
        >
          Friends Who Enrolled
        </Link>
        <p className="primary-color para-16px-semi home-footer-paras">
          Terms & Conditions
        </p>
      </div>
    </div>
  );
};

export default Home;

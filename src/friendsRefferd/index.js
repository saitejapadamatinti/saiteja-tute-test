import React from "react";
import "./index.css";
import EnrollerdCard from "../EnrollerdCard";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const enrolledFriendsList = [
  {
    id: 1,
    userName: "Dhiraj Saxsena",
    enrolledDate: "14 Sep, 2022",
    courseNames: [
      "UI/UX",
      "Photoshop",
      "Illustrator",
      "Python",
      "MERN",
      "Java",
    ],
    referralAmount: "185",
  },
  {
    id: 2,
    name: "",
    enrolledDate: "",
    "Courses Enrolled": "",
    "course names": [
      "UI/UX",
      "Photoshop",
      "Illustrator",
      "Python",
      "MERN",
      "Java",
      "Java",
      "Java",
    ],
    "referral amount": "185",
  },
  {
    id: 3,
    name: "",
    enrolledDate: "",
    "Courses Enrolled": "",
    "course names": [
      "UI/UX",
      "Photoshop",
      "Illustrator",
      "Python",
      "MERN",
      "Java",
      "MERN",
      "Java",
    ],
    "referral amount": "185",
  },
];

const FriendRefferd = () => {
  return (
    <div className="friend-reffer-main-container">
      <div>
        <Link
          to="/"
          className="primary-color para-16px-semi referred-friend-go-back-div"
        >
          <BsArrowLeftShort className="friend-reffer-back-icon" /> go back
        </Link>
      </div>
      <div className="friend-reffer-code-balance-div section-margin">
        <div>
          <p className="primary-color para-16px-regular">Your Refferal Code</p>
          <div className="friend-reffer-code-div para-16px-semi ">
            <span>E</span>
            <span>D</span>
            <span>C</span>
            <span>H</span>
            <span>5</span>
            <span>4</span>
          </div>
        </div>
        <div className="friend-reffer-balance-card">
          <p className="primary-color para-14px">Wallet Balance</p>
          <h2 className="para-16px-semi">₹ 500</h2>
        </div>
      </div>
      <div className="section-margin friend-enrolled-cards-div">
        <h2 className="primary-color head-24px-600-bold">
          Friends who Enrolled
          <span className="font-light-color head-24px-semibold">(3)</span>
        </h2>
        <div className="enrollcards-div">
          {enrolledFriendsList.map((eachFriend) => (
            <EnrollerdCard key={eachFriend.id} enrolledData={eachFriend} />
          ))}
        </div>
      </div>
      <p className="para-16px-semi primary-color section-margin-terms">
        Terms & Conditions
      </p>
    </div>
  );
};

export default FriendRefferd;

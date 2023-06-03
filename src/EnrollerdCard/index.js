import React from "react";
import "./index.css";

const EnrollerdCard = (props) => {
  const { enrolledData } = props;
  const {
    id,
    userName,
    enrolledDate,
    CoursesEnrolled,
    courseNames,
    referralAmount,
  } = enrolledData;

  return (
    <div className="enrolled-card-div">
      <div className="enrolled-card-name-div">
        <h2 className="para-16px-700 white-color">{userName}</h2>
        <p className="para-14px white-color">{enrolledDate}</p>
      </div>
      <p className="para-14px-500 white-color">Courses Enrolled(6)</p>
      <div className="enrolled-card-courses-names-div">
        <span className="enrolled-card-course-name white-color para-14px">
          UI/UX
        </span>
        <span className="enrolled-card-course-name white-color para-14px">
          UI/UX
        </span>
        <span className="enrolled-card-course-name white-color para-14px">
          UI/UX
        </span>
        <span className="enrolled-card-course-name white-color para-14px">
          UI/UX
        </span>
        <span className="enrolled-card-course-name white-color para-14px">
          UI/UX
        </span>
        <span className="enrolled-card-course-name white-color para-14px">
          UI/UX
        </span>
      </div>
      <p className="para-16px-regular white-color referal-amount-para">
        Referral Amount <span className="head-24px-600-bold white-color">₹{referralAmount}</span>
      </p>
    
    </div>
  );
};

export default EnrollerdCard;

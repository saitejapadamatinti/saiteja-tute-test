import React from "react";
import "./index.css";

const EnrollerdCard = (props) => {
  const { enrolledData } = props;
  console.log(enrolledData);
  const { className } = enrolledData;
  console.log(className);

  const {
    id,
    userName,
    enrolledDate,
    CoursesEnrolled,
    courseNames,
    referralAmount,
  } = enrolledData;

  return (
    <>
      {enrolledData.map((each) => (
        <div className="enrolled-card-div">
          <div className="enrolled-card-name-div">
            <h2 className="para-16px-700 white-color">{each.userName}</h2>
            <p className="para-14px white-color">{each.enrolledDate}</p>
          </div>
          <p className="para-14px-500 white-color">
            Courses Enrolled({each.courseNames.length})
          </p>
          <div className="enrolled-card-courses-names-div">
            {each.courseNames.map((each) => (
              <span className="enrolled-card-course-name white-color para-14px">
                {each}
              </span>
            ))}
          </div>
          <p className="para-16px-regular white-color referal-amount-para">
            Referral Amount
            <span className="head-24px-600-bold white-color">
              ₹{each.referralAmount}
            </span>
          </p>
        </div>
      ))}
    </>
  );
};

export default EnrollerdCard;

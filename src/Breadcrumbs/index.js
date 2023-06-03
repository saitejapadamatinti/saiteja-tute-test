import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

const BreadCrumbs = () => {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return (
    <div>
      <p className="breadcrumbs">UI/UX > Refer & Earn > {crumbs}</p>
    </div>
  );
};

export default BreadCrumbs;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { arrowRight } from "../../arrows/arrows";

function Executive() {
  const location = useLocation();
  return (
    <div className="navigation">
      <Link to="/reports">Reports</Link>
      {arrowRight}
      <Link to={location.pathname}>Executive</Link>
      {arrowRight}
    </div>
  );
}

export default Executive;

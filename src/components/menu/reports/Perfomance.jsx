import React from "react";
import { Link, useLocation } from "react-router-dom";
import { arrowRight } from "../../arrows/arrows";

function Perfomance() {
  const location = useLocation();
  return (
    <div className="navigation">
      <Link to="/reports">Reports</Link>
      {arrowRight}
      <Link to={location.pathname}>Perfomance</Link>
      {arrowRight}
    </div>
  );
}

export default Perfomance;

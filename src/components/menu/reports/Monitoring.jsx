import React from "react";
import NavBoard from "./board/NavBoard";
import { Link, useLocation } from "react-router-dom";
import { arrowRight } from "../../arrows/arrows";

function Monitoring() {
  const location = useLocation();

  return (
    <div className="">
      <div className="navigation">
        <Link to="/reports">Reports</Link>
        {arrowRight}
        <Link to={location.pathname}>Monitoring</Link>
        {arrowRight}
        Search: {location.search} [Airport: SFO] + [Date: 14th July 2020]
      </div>
      <NavBoard />
    </div>
  );
}

export default Monitoring;

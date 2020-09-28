import React from "react";
import { arrowDown, arrowRight } from "../arrows/arrows";
import { Link } from "react-router-dom";

function MenuPanel() {
  const showMenu = () => {
    const menu = document.querySelector(".reports-menu");
    const arrow = document.querySelector(".reports-arrow");
    menu.classList.toggle("notshow");
    arrow.classList.toggle("notshow");
  };
  const attention = <div className="attention">!</div>;

  return (
    <div className="menu-panel">
      <Link to="/dashboard">
        <div className="container">Dashboard</div>
      </Link>
      <Link to="/reports">
        <div className="container" onClick={showMenu}>
          Reports <span className="reports-arrow">{arrowDown}</span>
        </div>
      </Link>
      <div className="container reports-menu">
        <Link to="/reports/executive">
          <div className="container">{arrowRight}Executive</div>
        </Link>
        <Link to="/reports/monitoring">
          <div className="container">{arrowRight}Monitoring</div>
        </Link>
        <Link to="/reports/perfomance">
          <div className="container">{arrowRight}Perfomance</div>
        </Link>
      </div>
      <Link to="/cams">
        <div className="container">Cams</div>
      </Link>
      <Link to="/alerts">
        <div className="container alert">Alerts{attention}</div>
      </Link>
      <Link to="/setting">
        <div className="container">Setting</div>
      </Link>
    </div>
  );
}

export default MenuPanel;

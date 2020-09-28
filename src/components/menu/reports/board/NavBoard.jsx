import React, { useState } from "react";
import FlightBoard from "./FlightBoard";
import { arrowUp, arrowDown } from "../../../arrows/arrows";
import { flights } from "../../../../flights";

function NavBoard() {
  const [state, setState] = useState(flights);
  const [asc, setAsc] = useState("");
  const header = [
    "Airport",
    "Gate",
    "Date",
    "Turns",
    "Category",
    "Time",
    "Task",
    "Pass",
    "Video",
  ];

  const sortFlights = (list, item) => {
    const sortedAsc = list.slice().sort((a, b) => (a[item] > b[item] ? 1 : -1));
    const sortedDesc = list
      .slice()
      .sort((a, b) => (b[item] < a[item] ? -1 : 1));

    asc ? setState(sortedAsc) : setState(sortedDesc);
    setAsc(() => !asc);
  };

  return (
    <div className="nav-board">
      <div className="nav-board__table">
        <table className="">
          <thead className="">
            <tr>
              {header.map((head, i) => (
                <th
                  className="nav-board__th"
                  onClick={() => {
                    sortFlights(state, head.toLowerCase());
                  }}
                  key={i}
                >
                  {head}
                  {asc ? arrowDown : arrowUp}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <FlightBoard flights={state} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NavBoard;

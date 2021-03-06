/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { checked, unChecked } from "../../../arrows/arrows";

const Flight = ({ flight }) => {
  return (
    <tr className="flight-string">
      <td className="flight-cell">{flight.airport}</td>
      <td className="flight-cell">{flight.gate}</td>
      <td className="flight-cell">{flight.date}</td>
      <td className="flight-cell">{flight.turns}</td>
      <td className="flight-cell">{flight.category}</td>
      <td className="flight-cell">{flight.time}</td>
      <td className="flight-cell">{flight.task}</td>
      <td className="flight-cell">{flight.pass ? checked : unChecked}</td>
      <td className="flight-cell">
        <a>{flight.video}</a>
      </td>
    </tr>
  );
};

export default Flight;

Flight.propTypes = {
  flight: PropTypes.shape(),
};
Flight.default = {
  flight: {},
};

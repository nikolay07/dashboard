import React from "react";
import Flight from "./Flight";
import PropTypes from "prop-types";

const FlightBoard = ({ flights }) => {
  const flightsList = () => (
    <>
      {flights.map((flight, i) => (
        <Flight flight={flight} key={i} />
      ))}
    </>
  );

  return flightsList();
};

export default FlightBoard;

FlightBoard.propTypes = {
  flight: PropTypes.shape(),
};
FlightBoard.default = {
  flight: {},
};

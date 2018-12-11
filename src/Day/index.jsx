import React from "react";
import PropTypes from "prop-types";
import { Exercise } from "../Exercise";

export const Day = ({ day, exercises }) => {
  const mapExercises = (props, index) => (
    <Exercise key={`${index}`} {...props} />
  );

  return (
    <div>
      <p>Day {day}</p>
      {exercises.map(mapExercises)}
    </div>
  );
};

Day.propTypes = {
  day: PropTypes.string.isRequired,
  exercises: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Day;

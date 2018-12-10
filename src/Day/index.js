import React from "react";
import { Exercise } from "../Exercise";

const mapExercises = (props, index) => <Exercise key={`${index}`} {...props} />;

export const Day = ({ day, exercises }) => (
  <div>
    <p>Day {day}</p>
    {exercises.map(mapExercises)}
  </div>
);

export default Day;

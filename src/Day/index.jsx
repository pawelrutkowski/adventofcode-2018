import { Exercise } from '../Exercise'
import PropTypes from 'prop-types'
import React from 'react'

export const Day = ({ day, exercises }) => {
  const dayString = 'Day'
  return (
    <div>
      <p>
        {dayString}
        {' '}
        {day}
      </p>
      {exercises.map((props, index) => (
        <Exercise
          key={props.name}
          {...props}
        />
      ))}
    </div>
  )
}

Day.propTypes = {
  'day': PropTypes.string.isRequired,
  'exercises': PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

Day.propTypes = {
  name: PropTypes.string,
};

export default Day

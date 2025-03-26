import React from 'react';

const Weekdays = () => {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().getDay();
  const orderedWeekdays = [...weekdays.slice(today), ...weekdays.slice(0, today)];
    return (
    <ul>
      {orderedWeekdays.map((weekday, index) => (
        <li key={index}>{weekday}</li>
      ))}
    </ul>
    );
};
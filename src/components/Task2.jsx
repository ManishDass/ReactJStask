import React, { useState } from 'react';
import './Task2.css'; // Importing CSS for styling

const jsonData = [
  {
    Id: 101,
    Name: "test",
    Date: "2023-07-20",
    Time: "22:30"
  },
  {
    Id: 102,
    Name: "test 1",
    Date: "2023-08-21",
    Time: "09:00"
  },
  {
    Id: 103,
    Name: "test 2",
    Date: "2023-09-19",
    Time: "09:30"
  },
  {
    Id: 104,
    Name: "test 3",
    Date: "2023-07-15",
    Time: "07:00"
  },
  {
    Id: 105,
    Name: "test 4",
    Date: "2023-06-24",
    Time: "09:21"
  },
  {
    Id: 106,
    Name: "test 5",
    Date: "2023-06-11",
    Time: "11:00"
  },
];

const DateCheckboxList = ({ data, selectedDate, onDateClick }) => {
  return (
    <div className="date-checkbox-list">
      <h2>Dates</h2>
      <ul style={{listStyleType: 'none'}}>
        {data.map(item => (
          <li key={item.Id}>
            <input
              type="checkbox"
              id={item.Id}
              checked={selectedDate === item.Date}
              onChange={() => onDateClick(item.Date)}
            /> 
            <label htmlFor={item.Id}>{item.Date}  ({item.Time})</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Task2 = () => {
  const [displayedWeek, setDisplayedWeek] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const week = getWeek(new Date(date));
    setDisplayedWeek(week);
  };

  const getWeek = (date) => {
    const currentDay = date.getDay();
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - currentDay);
    const week = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      week.push(day.toISOString().split('T')[0]);
    }
    return week;
  };

  return (
    <div className="app-container">
      <h1 className="app-title">JSON Data with Dates</h1>
      <div className="app-content">
        <div className="data-section">
          <DateCheckboxList
            data={jsonData}
            selectedDate={selectedDate}
            onDateClick={handleDateClick}
          />
        </div>
        <div className="week-section">
          <h2>Displayed Week:</h2>
          <ul>
            {displayedWeek.map(date => (
              <li key={date}>{date}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Task2;

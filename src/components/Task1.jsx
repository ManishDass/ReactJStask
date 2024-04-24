import React, { useState } from 'react';
import moment from 'moment-timezone';
import './Task1.css'; // Importing CSS for styling

const Task1 = () => {
    // State for current date
    const [currentDate, setCurrentDate] = useState(moment().format('YYYY-MM-DD'));

    // State for selected timezone
    const [selectedTimezone, setSelectedTimezone] = useState('UTC-0');

    // Function to handle timezone change
    const handleTimezoneChange = (e) => {
        setSelectedTimezone(e.target.value);
    };

    // Function to handle previous week button click
    const handlePreviousWeek = () => {
        setCurrentDate(moment(currentDate).subtract(7, 'days').format('YYYY-MM-DD'));
    };

    // Function to handle next week button click
    const handleNextWeek = () => {
        setCurrentDate(moment(currentDate).add(7, 'days').format('YYYY-MM-DD'));
    };

    // Function to convert time from UTC-0 to selected timezone
    const convertTimezone = (time) => {
        return moment.tz(time, 'HH:mm', 'UTC').tz(selectedTimezone).format('HH:mm');
    };

    // Function to render checkboxes for each day of the week
    // Function to render checkboxes for each day of the week
    const renderCheckboxes = () => {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
        const startTime = moment('08:00', 'HH:mm').tz(selectedTimezone); // Start time at 8:00 AM in selected timezone
        const endTime = moment('23:00', 'HH:mm').tz(selectedTimezone); // End time at 11:00 PM in selected timezone
        const interval = 30; // Interval of 30 minutes
        const currentDateDay = moment(currentDate).format('dddd').slice(0, 3);
        console.log(currentDateDay)

        const times = [];
        let currentTime = moment(startTime);
        while (currentTime <= endTime) {
            times.push({
                time: convertTimezone(currentTime.format('HH:mm')),
                ampm: currentTime.format('A') // Get AM or PM
            });
            currentTime.add(interval, 'minutes');
        }
    
        return (
            <div className="schedule-section">
                {days.map((day, index) => {

                    return (
                        <div key={index} className="day">
                            <div className='day-section'><h3>{day}</h3></div>
                            <div className="timeslots">
                                {times.map((time, i) => (
                                    <div key={i} className="timeslot">
                                        <input type="checkbox" className='timeslot-checkbox' id={`${day}-${time.time}`} />
                                        <label>{time.time} {time.ampm}</label>
                                    </div>
                                ))}
                            </div>

                        </div>
                    );
                })}
            </div>
        );
    };

    // Function to render the timezone select dropdown
    const renderTimezoneSelect = () => {
        return (
            <div className="timezone-section">
                <label>Select Timezone:</label>
                <select value={selectedTimezone} onChange={handleTimezoneChange}>
                    <option value="UTC-0">UTC-0</option>
                    <option value="Asia/Kolkata">UTC +5.30</option>
                </select>
            </div>
        );
    };

    return (
        <div className="task1-container">
            <header className="header">
                <button className="week-button" onClick={handlePreviousWeek}>Previous Week</button>
                <div className="current-date">{moment(currentDate).format('MMMM DD, YYYY')}</div>
                <button className="week-button" onClick={handleNextWeek}>Next Week</button>
            </header>
            {renderTimezoneSelect()}
            {renderCheckboxes()}
        </div>
    );
};

export default Task1;

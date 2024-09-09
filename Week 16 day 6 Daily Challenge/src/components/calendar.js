import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setSelectedDate } from '../features/selectedDateSlice'; // Assuming you have a slice for managing selected date

const Calendar = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.selectedDate);

  // Handle date selection
  const handleDateChange = (event) => {
    const newDate = event.target.value;
    dispatch(setSelectedDate(newDate));
  };

  return (
    <input 
      type="date" 
      value={selectedDate}
      onChange={handleDateChange}
    />
  );
};

export default Calendar;

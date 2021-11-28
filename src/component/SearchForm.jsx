import React, { useState } from "react";
import { getSuggestedCity } from "../redux/hotel/actions/actions";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import moment from "moment";
import DatePicker from "react-date-picker";

const SearchForm = () => {
  const currentDate = new Date();
  const [date, setDate] = useState({
    checkin: currentDate,
    checkout: currentDate,
  });
  const [userInput, setUserInput] = useState(null);

  function handleCheckin(selectedDate) {
    setDate((prev) => ({ ...prev, checkin: selectedDate }));
  }

  function handleCheckout(selectedDate) {
    setDate((prev) => ({ ...prev, checkout: selectedDate }));
  }

  const handleForm = () => {
    setUserInput(date);
  };

  return (
    <div>
      <div>
        <label>city name</label>
        <input type="search" />
      </div>

      <div>
        <label>checkin</label>
        <DatePicker onChange={handleCheckin} value={date.checkin} />
      </div>

      <div>
        <label>checkout</label>
        <DatePicker onChange={handleCheckout} value={date.checkout} />
      </div>

      <button onClick={handleForm}>search</button>

      {userInput && (
        <h2> checkin {moment(userInput.checkin).format("YYYY-MM-DD")}</h2>
      )}
      {userInput && (
        <h2> checkout {moment(userInput.checkout).format("YYYY-MM-DD")}</h2>
      )}
    </div>
  );
};

export default SearchForm;

import React, { useState, useEffect } from "react";
import { getSuggestedCity } from "../redux/hotel/actions/actions";
import { useDispatch } from "react-redux";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import DatePicker from "react-date-picker";

const SearchForm = ({ children }) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [formData, setformData] = useState({
    cityName: null,
    checkin: today, 
    checkout: tomorrow,
    adult: 1,
    children: "",
    rooms: 1,
  });
  const [userInput, setUserInput] = useState(null);
  const dispatch = useDispatch();

  function handleCheckin(selectedDate) {
    setformData((prev) => ({ ...prev, checkin: selectedDate }));
  }

  function handleCheckout(selectedDate) {
    setformData((prev) => ({ ...prev, checkout: selectedDate }));
  }

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    setUserInput(formData);
  };

  function showResult() {
    if (userInput !== null) {
      return (
        <>
          <h2>
            <b style={{ color: "red" }}>city</b> {userInput.cityName}
          </h2>
          <h2>
            <b style={{ color: "red" }}>checkin</b>{" "}
            {moment(userInput.checkin).format("YYYY-MM-DD")}{" "}
          </h2>
          <h2>
            <b style={{ color: "red" }}>checkout</b>{" "}
            {moment(userInput.checkout).format("YYYY-MM-DD")}
          </h2>
          <h2>
            <b style={{ color: "red" }}>adults</b> {userInput.adult}
          </h2>
          <h2>
            <b style={{ color: "red" }}>children</b> {userInput.children}
          </h2>
          <h2>
            <b style={{ color: "red" }}>rooms</b> {userInput.rooms}
          </h2>
        </>
      );
    }
  }

  useEffect(() => {
    if (formData.cityName !== null) {
      dispatch(getSuggestedCity(formData.cityName));
    }
  }, [dispatch, formData.cityName]);

  return (
    <div>
      <div>
        <label>city name</label>
        <input
          type="search"
          name="cityName"
          value={formData.cityName}
          required
          onChange={handlechange}
        />
      </div>
      <div>{children}</div>
      <div>
        <label>checkin</label>
        <DatePicker onChange={handleCheckin} value={formData.checkin} />
      </div>

      <div>
        <label>checkout</label>
        <DatePicker onChange={handleCheckout} value={formData.checkout} />
      </div>

      <div>
        <label>no of adult</label>
        <select value={formData.adult} name="adult" onChange={handlechange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <div>
        <label>no of children</label>
        <select
          value={formData.children}
          name="children"
          onChange={handlechange}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <div>
        <label>no of rooms</label>
        <select value={formData.rooms} name="rooms" onChange={handlechange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <button onClick={handleSubmit}>search</button>

      {showResult()}
    </div>
  );
};

export default SearchForm;

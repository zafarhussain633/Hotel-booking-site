
import './App.css';
import React, { useEffect, useState } from 'react'
import _ from "lodash"
import { useDispatch, useSelector } from 'react-redux'
import { getSuggestedCity } from "./redux/hotel/actions/actions"


function App() {
  const [city, setCityName] = useState(null);
  const [cityNameForsearch, setCityNameForsearch] = useState("");
  const [showSuggestedCity, setShowSuggestedCity] = useState(true);
  const { suggestCity } = useSelector(state => state)

  const dispatch = useDispatch()

  console.log(suggestCity);

  function handleClickCity(cityName) {
    setCityNameForsearch(cityName);
    setShowSuggestedCity(false);
  }

  function handleCalender(e) {
    console.log(e.target.value)
  }



  useEffect(() => {
    if (city != null) {
      dispatch(getSuggestedCity(city))
    }

  }, [dispatch, city])


  function showSuggestedCityList() {
    if (!suggestCity.loading && !_.isEmpty(suggestCity.data)) {
      return suggestCity.data.map(v =>
        (<h4 onClick={() => handleClickCity(v.name)} style={{ border: "1px solid grey", margin: "10px", padding: "20px" }}>city name: {v.name}  city_id : {v.dest_id}</h4>)
      )
    }
    if (!suggestCity.loading && _.isEmpty(suggestCity.data)) {
      return "search item not found"
    }
    // if(_.isEmpty(suggestCity.data)){
    //     return "result not found"
    // }
  }


  return (
    <div className="App">

      <form className="mt-5">
        <div>
          <input className="p-2" value={city} type="search" placeholder="search city , hotel , airport" onChange={(e) => setCityName(e.target.value)} />
          <button onClick={() => setCityNameForsearch("")} >remove</button>


          <div className="row">
            <div className="mt-5 col-6 d-flex justify-content-end">
              <label htmlFor="birthday">checkin</label>
              <input type="date" id="birthday" name="birthday" onChange={(e) => handleCalender(e)} />
              <input type="submit" />
            </div>

            <div className="mt-5 col-6 d-flex justify-content-start">
              <label htmlFor="birthday">check-out</label>
              <input type="date" id="birthday" name="birthday" onChange={(e) => handleCalender(e)} />
              <input type="submit" />
            </div>
          </div>

         
        <label className="mt-5" htmlFor="">No of adults</label>
          <select>
            <option value="1">1</option>
            <option value="2">2 </option>
            <option value="3">3 </option>
            <option value="3">4 </option>
            <option value="3">5 </option>
          </select>
          

       <label className="mt-5" htmlFor="">No of children</label> 
          <select>
            <option value="1">0</option>
            <option value="1">1</option>
            <option value="2">2 </option>
            <option value="3">3 </option>
            <option value="3">4 </option>
            <option value="3">5 </option>
          </select>
          
          <label htmlFor="birthday">No of Rooms</label>
          <select>
            <option value="1">1</option>
            <option value="2">2 </option>
            <option value="3">3 </option>
            <option value="3">4 </option>
            <option value="3">5 </option>
          </select>

        </div>
          <button className="btn btn-primary">Search Hotel</button>
      </form>
      {showSuggestedCity ? showSuggestedCityList() : ""}

    </div>
  );
}

export default App;

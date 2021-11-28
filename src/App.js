
import './App.css';
import React from 'react'
import _ from "lodash"
import { useSelector } from 'react-redux'
import SearchForm from "./component/SearchForm"

function App() {

  const { suggestCity } = useSelector(state => state)

  console.log(suggestCity);

  function showSuggestedCityList() {
    if (!suggestCity.loading && !_.isEmpty(suggestCity.data)) {
      return suggestCity.data.map(v =>
        (<h4 style={{ border: "1px solid grey", margin: "10px", padding: "20px" }}>city name: {v.name}  city_id : {v.dest_id}</h4>)
      )
    }
    if (!suggestCity.loading && _.isEmpty(suggestCity.data)) {
      return "search item not found"
    }
  }


  return (
    <div className="App">

      <SearchForm  >
        {showSuggestedCityList()}
      </ SearchForm>
    </div>
  );
}

export default App;

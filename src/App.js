
import './App.css';
import React from 'react'
import _ from "lodash"
import { useSelector } from 'react-redux'
import { getSuggestedCity } from "./redux/hotel/actions/actions"
import SearchForm from "./component/SearchForm"

function App() {
  
  const { suggestCity } = useSelector(state => state)

  console.log(suggestCity);

  // function handleClickCity(cityName) {
  //   setCityNameForsearch(cityName);
  //   setShowSuggestedCity(false);
  // }




  // useEffect(() => {
  //   if (city != null) {
  //     dispatch(getSuggestedCity(city))
  //   }

  // }, [dispatch, city])


  function showSuggestedCityList() {
    if (!suggestCity.loading && !_.isEmpty(suggestCity.data)) {
      return suggestCity.data.map(v =>
        (<h4 style={{ border: "1px solid grey", margin: "10px", padding: "20px" }}>city name: {v.name}  city_id : {v.dest_id}</h4>)
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
      {showSuggestedCityList()}
      <SearchForm />
     <h2>working</h2>
     
    </div>
  );
}

export default App;

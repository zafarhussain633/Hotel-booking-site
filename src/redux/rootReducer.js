import {combineReducers} from "redux"
import CitySuggestionReducer from "./hotel/reducers/citySuggestionReducer"

const rootReducer = combineReducers({
    suggestCity:CitySuggestionReducer
})

export default rootReducer
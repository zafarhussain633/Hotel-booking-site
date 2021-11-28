import constants from "../constants/constants"

const initialData = {
    loading: true,
    suggestedCity: [],
    errMSg: ""
}


const CitySuggestionReducer = (state = initialData, actions) => {
    switch (actions.type) {

        case constants.SUGESTED_CITY_LOADING:
            return {
                loading: true
            }

        case constants.SUGESTED_CITY_SUCCESS:

            return {
                loading: false,
                data: actions.payload
            }

        case constants.SUGESTED_CITY_FAILED:

            return {
                loading: false,
                SuggestCity: actions.errMSg
            }

        default:
            return state
    }
}

export default CitySuggestionReducer
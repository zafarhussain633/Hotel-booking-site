import constants from "../constants/constants"
import axios from "axios"

const getSuggestedCity = (cityName) => async dispatch => {

    dispatch({
        type: constants.SUGESTED_CITY_LOADING
    })

    try {
        const options = {
            method: 'GET',
            url: 'https://booking-com.p.rapidapi.com/v1/hotels/locations',
            params: { locale: 'en-gb', name: cityName },
            headers: {
                'x-rapidapi-host': 'booking-com.p.rapidapi.com',
                'x-rapidapi-key': ''
            }
        };

        const { data } = await axios.request(options)

        dispatch({
            type: constants.SUGESTED_CITY_SUCCESS,
            payload: data
        })

    }catch(err){
        dispatch({
            type: constants.SUGESTED_CITY_FAILED,
            errMsg: err
        })
    }
   //ecf3fcb31bmsh6e86c6d6b0a1fc2p1a94cejsndef9a9c6e284  exceeded monthly limit on this api key

}

export {getSuggestedCity}
import { GET_POSITION } from "../actions";
import { CURRENCY_POSITION } from "../actions"; 

const INITIAL_STATE = {
    latitude: 0,
    longitude: 0,
}

const issPosition = (state = INITIAL_STATE, action) => {
  switch(action.type){
      case GET_POSITION:
          const { iss_position } = action.payload;
          return {
              ...state,
              latitude: iss_position.latitude,
              longitude: iss_position.longitude,
          }

        case CURRENCY_POSITION:
            return {
              ...state,
              latitude: iss_position.latitude,
              longitude: iss_position.longitude,
            }  
        default:
           return state;   
  }
}

export default issPosition; 
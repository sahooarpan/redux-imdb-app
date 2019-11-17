
import { SEARCH_MOVIE } from '../actions/types'

const initialStates = {
    text:'',
    movies:[],
    loading:false,
    movie:[]
}

export default function(state=initialStates,action){
    switch(action.type){
        case SEARCH_MOVIE:
            return {
                ...state,
                text:action.payload.text,
                loading:false
            };
        default:
            return state
    }
}
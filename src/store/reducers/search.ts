import { ReturnCombinedDatas } from "../../api";
import {
    SEARCH_INIT, SEARCH_SUCCESS, SEARCH_FAILURE,
    SearchReturnTypes
} from "../actions/search";

interface SearchResult {
    success: boolean,
    pokemon: ReturnCombinedDatas
}

const initialState: SearchResult = {
    success: false,
    pokemon: []
};

const searchReducer = (prevState = initialState, action: SearchReturnTypes): SearchResult => {
    switch(action.type){
        case SEARCH_INIT:
            return { ...prevState }
        case SEARCH_SUCCESS:
            return {
                ...prevState,
                success: true,
                pokemon: action.payload
            }
        case SEARCH_FAILURE:
            return {
                ...prevState,
                success: false,
            }
        default:
            return  prevState;
    }
}

export default searchReducer;
import {
    SEARCH_INIT, SEARCH_SUCCESS, SEARCH_FAILURE,
    ReturnTypes, CombinedDatas
} from "../actions/search";

interface SearchResult {
    limit: number,
    success: boolean,
    pokemon?: CombinedDatas[]
}

const initialState: SearchResult = {
    limit: 8,
    success: false
};

const searchReducer = (prevState = initialState, action: ReturnTypes): SearchResult => {
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
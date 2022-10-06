import {
    SEARCH_INIT, SEARCH_SUCCESS, SEARCH_FAILURE,
    SearchReturnTypes
} from "../actions/search";

interface SearchResult {
    success: boolean,
    data: any
}

const initialState: SearchResult = {
    success: false,
    data: []
};

const searchReducer = (prevState = initialState, action: SearchReturnTypes): SearchResult => {
    // console.log("searchReducer: ", action);
    switch(action.type){
        case SEARCH_INIT:
            return { ...prevState }
        case SEARCH_SUCCESS:
            return {
                ...prevState,
                success: true,
                data: action.payload
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
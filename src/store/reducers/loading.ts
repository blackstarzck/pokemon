import { LOADING_PENDING, LOADING_FINISHED, LoadingReturnType } from "../actions/loading";

interface LoadingStatus {
    isLoaded: boolean;
}

const initialState: LoadingStatus = {
    isLoaded: false
};

const loadingReducer = (prevState = initialState, action: LoadingReturnType): LoadingStatus => {
    switch(action.type){
        case LOADING_PENDING :
            return { isLoaded: true }
        case LOADING_FINISHED :
            return { isLoaded: false }
        default:
            return  prevState;
    }
}

export default loadingReducer;
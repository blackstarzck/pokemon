import { SELECT_OPEN, SELECT_CLOSE } from "../actions/sort";

interface SortResult {
    isOpen: boolean,
    sortType: string
}

const initialState: SortResult = {
    isOpen: false,
    sortType: "Lowest Number"
};

const sortReducer = (prevState = initialState, action: any) => {
    // console.log("sortReducer: ", action);
    switch(action.type){
        case SELECT_OPEN :
            return {
                ...prevState,
                isOpen: true,
            }
        case SELECT_CLOSE :
            return {
                ...prevState,
                isOpen: false,
                sortType: action.sortType
            }
        default:
            return  prevState;
    }
}

export default sortReducer;
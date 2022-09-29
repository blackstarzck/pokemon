import { FILTER_POKEMON, FILTER_ABILITY, FILTER_TYPE } from "../actions/filter";

interface FilterReducer {
    filter: string;
}

const initialState: FilterReducer = {
    filter: "pokemon"
};

const filterReducer = (prevState = initialState, action: any): FilterReducer => {
    switch(action.type){
        case FILTER_POKEMON :
            return { filter: "pokemon" }
        case FILTER_ABILITY :
            return { filter: "ability" }
        case FILTER_TYPE :
            return { filter: "type" }
        default:
            return  prevState;
    }
}

export default filterReducer;
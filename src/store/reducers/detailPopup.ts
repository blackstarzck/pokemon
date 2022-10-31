import { IS_CLOSE, IS_OPEN, Pokemon } from "../actions/detailPopup";


export interface PopupReducer {
    type: string,
    payload: Pokemon | null
}

const initialState = {
    type: IS_CLOSE,
    payload: null
}

const detailPopupReducer = (prevState = initialState, action: any): PopupReducer =>{
    switch(action.type){
        case IS_OPEN :
            return { type: IS_OPEN, payload: action.payload };
        case IS_CLOSE :
            return { type: IS_CLOSE, payload: null };
        default:
            return prevState;
    }
}

export default detailPopupReducer;
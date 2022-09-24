import { combineReducers } from "redux";
import sortReducer from "./sort";
import selectBoxReducer from "./selectbox";
import searchReducer from "./search";

const rootReducer = combineReducers({
    sort: sortReducer,
    selectBox: selectBoxReducer,
    search: searchReducer
});

export type RootState = ReturnType<typeof rootReducer>; // "ReturnType" = 함수의 리턴타입을 가져온다.

export default rootReducer;
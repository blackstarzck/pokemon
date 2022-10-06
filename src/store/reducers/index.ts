import { combineReducers } from "redux";
import sortReducer from "./sort";
import searchReducer from "./search";
import loadingReducer from "./loading";
import filterReducer from "./filter";

const rootReducer = combineReducers({
    filter: filterReducer,
    sort: sortReducer,
    search: searchReducer,
    loading: loadingReducer
});

export type RootState = ReturnType<typeof rootReducer>; // "ReturnType" = 함수의 리턴타입을 가져온다.

export default rootReducer;
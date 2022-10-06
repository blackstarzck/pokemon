import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, MiddlewareAPI, Dispatch, AnyAction, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

const firstMiddleaware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
    next(action);
}

const thunkMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
    // npm install redux-thunk로 추가할 수 있다.
    // action이 객체가 아니라 함수가되도록한다.
    // 비동기일 경우 함수를 사용할 것이고, 그렇기 때문에 비동기관련 로직은 함수의 형태로 작성되어야 한다.

    if(typeof action === "function"){ // 비동기
        return action(store.dispatch, store.getState)
    }
    return next(action); // 동기일 경우
}

const enhancer = composeWithDevTools(
    applyMiddleware(
        firstMiddleaware,
        thunkMiddleware
    )
);

// const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

// console.log("get state: ", store.getState());


export default store;
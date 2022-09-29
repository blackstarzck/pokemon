import { Dispatch } from "redux";
import createCard, { ReturnCombinedDatas } from "../../api";
import setLoadingStatus from "./loading";

export const SEARCH_INIT = "search/SEARCH_INIT" as const;
export const SEARCH_SUCCESS = "search/SEARCH_SUCCESS" as const;
export const SEARCH_FAILURE = "search/SEARCH_FAILURE" as const;


export interface ReturnSearchInit {
    type: typeof SEARCH_INIT,
}
export interface ReturnSearchSuccess {
    type: typeof SEARCH_SUCCESS,
    payload: ReturnCombinedDatas
}
export interface ReturnSearchFailure {
    type: typeof SEARCH_FAILURE
}

export type SearchReturnTypes = ReturnSearchInit | ReturnSearchSuccess | ReturnSearchFailure;

export interface ThunkDispatch {        // 함수 타이핑 (오버로딩: 같은 함수를 다른 방식으로 사용)
    (thunkAction: ThunkAction): void,   // 리턴값이 있을 경우
    <A>(action: A): A,                  // 리턴값이 없을 경우
    <TAction>(action: TAction | ThunkAction): TAction;
}
type ThunkAction = (dispatch: ThunkDispatch) => void;

export const search = (filter: string, input: string) => async (dispatch: Dispatch<SearchReturnTypes>) => {
    // const data = await createCard(filter, input);
    dispatch({ type: SEARCH_INIT });
    try{
        const data = await createCard(filter, input);
        dispatch({
            type: SEARCH_SUCCESS,
            payload: data
        });
    }catch(e){
        dispatch({
            type: SEARCH_FAILURE
        });
    }
}
import { Dispatch } from "redux";

export const SEARCH_INIT = "search/SEARCH_INIT" as const;
export const SEARCH_SUCCESS = "search/SEARCH_SUCCESS" as const;
export const SEARCH_FAILURE = "search/SEARCH_FAILURE" as const;

export interface PokemonData {
    results: BasicInfo[]
}

export interface ReturnSearchInit {
    type: typeof SEARCH_INIT,
}
export interface ReturnSearchSuccess {
    type: typeof SEARCH_SUCCESS,
    payload: {
        results: BasicInfo[],
    }
}
export interface ReturnSearchFailure {
    type: typeof SEARCH_FAILURE
}

interface BasicInfo {
    name: string,
    url: string
}

const baseURL = "https://pokeapi.co/api/v2";

const getSpecies = async (param: string = "pokemon", cases: string = "init" ): Promise<PokemonData> => {
    const response = await fetch(`${baseURL}/${param}/?limit=8`);
    const data = await response.json();
    return { results: data.results }
}

const getImage = async (url: string) => {
    const response = await fetch(url);
    const result = await response.json();
}

export type ReturnTypes = ReturnSearchInit | ReturnSearchSuccess | ReturnSearchFailure;

export interface ThunkDispatch {        // 함수 타이핑 (오버로딩: 같은 함수를 다른 방식으로 사용)
    (thunkAction: ThunkAction): void,   // 리턴값이 있을 경우
    <A>(action: A): A,                  // 리턴값이 없을 경우
    <TAction>(action: TAction | ThunkAction): TAction;
}
type ThunkAction = (dispatch: ThunkDispatch) => void;

export const search = (param: string) => async (dispatch: Dispatch<ReturnTypes>) => {
    dispatch({type: SEARCH_INIT})
    try{
        const data = await getSpecies(param);
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

// export const search = (param: string): ThunkAction => {
//     return async (dispatch) => {
//         dispatch({type: SEARCH_INIT})
//         try{
//             const data = await getSpecies(param)
//             dispatch({
//                 type: SEARCH_SUCCESS,
//                 payload: data
//             });
//         }catch(e){
//             dispatch({
//                 type: SEARCH_FAILURE
//             });
//         }
//     }
// }
import { Dispatch } from "redux";
import { ASC, DESC, HN, LN } from "../../components/home/Sort";
import { SEARCH_SUCCESS } from "./search";

export const SELECT_OPEN = "sort/SELECT_OPEN" as const;
export const SELECT_CLOSE = "sort/SELECT_CLOSE" as const;

type Order = { order: number, name: string };


const sortToggle = (data: { type: string, sortType: string | undefined, pData: { pokemons: Order[] }}) => (dispatch: Dispatch<any>) => {
    dispatch(data);
    if(!data.pData.pokemons) return false;

    let sortedArray = [...data.pData.pokemons];

    if(data.sortType === LN) sortedArray.sort((a: Order, b: Order): number =>  a.order - b.order)
    if(data.sortType === HN) sortedArray.sort((a: Order, b: Order): number =>  b.order - a.order)
    if(data.sortType === ASC){
        sortedArray.sort((a: Order, b: Order): any =>  {
            if(a.name > b.name) return 1;
            if(a.name < b.name) return -1;
            if(a.name === b.name) return 0;
        });
    }
    if(data.sortType === DESC){
        sortedArray.sort((a: Order, b: Order): any =>  {
            if(a.name < b.name) return 1;
            if(a.name > b.name) return -1;
            if(a.name === b.name) return 0;
        });
    }

    
    dispatch({
        type: SEARCH_SUCCESS,
        payload: {...data, pokemons: sortedArray}
    });
};

export default sortToggle;
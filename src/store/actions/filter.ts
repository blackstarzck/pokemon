export const FILTER_POKEMON = "filter/FILTER_POKEMON" as const;
export const FILTER_ABILITY = "filter/FILTER_ABILITY" as const;
export const FILTER_TYPE = "filter/FILTER_TYPE" as const;

interface FilterDispatch {
    type: string,
    payload: string
}

const setFilterItem = (filter: string): FilterDispatch => {
    let type = "", payload = "";
    if(filter === "pokemon") type = FILTER_POKEMON;
    if(filter === "ability") type = FILTER_ABILITY;
    if(filter === "type") type = FILTER_TYPE; 
    payload = filter;
    console.log(type, payload);
    return { type, payload };
}

export default setFilterItem;
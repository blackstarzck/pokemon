import { Dispatch } from "redux";

export const SEARCH_INIT = "search/SEARCH_INIT" as const;
export const SEARCH_SUCCESS = "search/SEARCH_SUCCESS" as const;
export const SEARCH_FAILURE = "search/SEARCH_FAILURE" as const;


export interface ReturnSearchInit {
    type: typeof SEARCH_INIT,
}
export interface ReturnSearchSuccess {
    type: typeof SEARCH_SUCCESS,
    payload: CombinedDatas[]
}
export interface ReturnSearchFailure {
    type: typeof SEARCH_FAILURE
}

type InitData = Array<Init>
interface Init {
    name: string,
    url: string,
    id: string
}

const baseURL = "https://pokeapi.co/api/v2/";

const getBasicInfo = async (sort: string = "pokemon", input: string, url?: string) => {
    let idOrName = input && `/${input}`;
    let limit = input ? "/?limit=1" : "/?limit=8";
    const response = url 
    ? await fetch(url)
    : await fetch(`${baseURL}${sort}${idOrName.toLowerCase()}${limit}`);

    const data = await response.json();

    if(input){
        const { height, weight, name, id, order } = data; // height unit: decimetres to meters (h / 10), weight unit: hectograms to kilograms ( w / 10 )
        const abilities = data.abilities.map((item: any) => item.ability);
        const stats = data.stats.map((item: any) => { return { name: item.base_stat, stat: item.stat.name } });
        const types = data.types.map((item: any) => item.type.name);
        return {
            name,
            order, 
            id,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            height: `${(height / 10)}m`, 
            weight: `${(weight / 10)}kg`,
            abilities, stats, types
        }
    }else{
        for(const listItem of data.results){
            const id = listItem.url.replace(`${baseURL}pokemon/`, "").replace(/.$/, "");
            listItem.id = Number(id);
        }
        return data.results
    }
}

interface Pokemon {
    name: string,
    order: number,
    id: number,
    img: string,
    height: string,
    weight: string,
    abilities: Array<{ name: string, url: string }>,
    stats: Array<{ name: string, stat: string }>,
    types: Array<object>
}


const getPokemonDatas = async (param: string, url?: string): Promise<Pokemon> => {
    const response = url 
    ? await fetch(url)
    : await fetch(`${baseURL}pokemon/${param}`);
    const data = await response.json();
    const { height, weight, name, id, order } = data; // height unit: decimetres to meters (h / 10), weight unit: hectograms to kilograms ( w / 10 )
    const abilities = data.abilities.map((item: any) => item.ability);
    const stats = data.stats.map((item: any) => { return { name: item.base_stat, stat: item.stat.name } });
    const types = data.types.map((item: any) => item.type.name);
    return { 
        name, 
        id, 
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`, 
        order, 
        height: `${(height / 10)}m`, 
        weight: `${(weight / 10)}kg`,
        abilities, stats, types
    }
}

interface Spicies {
    ev_chain_url: string,
    category: string,
    descriptions: string
}

const getSpecies = async (param: number): Promise<Spicies> => {
    const speciesResp = await fetch(`${baseURL}pokemon-species/${param}`);
    const data = await speciesResp.json();
    const category = data.genera.filter((item: any) => item.language.name === "en");
    const descriptions = data.flavor_text_entries.filter((item: any) => item.language.name === "en" && item.version.name === "red");
    return {
        ev_chain_url: data.evolution_chain.url,
        category: category[0].genus.replace(" Pokémon", ""),
        descriptions: descriptions[0].flavor_text.replace(/\n/g, " ").replace(/\f/g, " ")
    }
}

interface Evolution {
    ev_chain: Array<object>,
}

const getEvolutionChain = async (url: string): Promise<Evolution> => {
    const evResp = await fetch(url);
    const { chain } = await evResp.json();
    const newStr = (str: string) => str.replace(`${baseURL}pokemon-species/`, "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/").replace(/.$/, ".png");
    const ev_chain = [];

    if(chain.evolves_to.length > 0){
        ev_chain.push({ name: chain.species.name, img: newStr(chain.species.url) });
        ev_chain.push({ name: chain.evolves_to[0].species.name, img: newStr(chain.evolves_to[0].species.url) });
        if(chain.evolves_to[0].evolves_to.length > 0){
            ev_chain.push({ name: chain.evolves_to[0].evolves_to[0].species.name, img: newStr(chain.evolves_to[0].evolves_to[0].species.url) });
        }
    }
    return { ev_chain };
}

export interface CombinedDatas {
    name: string,
    id: number,
    order: number,
    category: string,
    img: string,
    ev_chain: object[],
    height: string,
    weight: string,
    abilities: { name: string, url: string }[],
    stats: { name: string, stat: string }[],
    types: object[],
    descriptions: string
};


const createCard = async (sort: string, input: string): Promise<CombinedDatas[]> => {
    const pokemons = [];
    let pokemon, species, ev;
    let lists = await getBasicInfo(sort, input);

    if(input){
        species = await getSpecies(lists.id);
        ev = await getEvolutionChain(species.ev_chain_url);
        return new Array({
            ...lists,
            ev_chain:       ev.ev_chain,
            category:       species.category,
            descriptions:   species.descriptions
        });
    }else{
        for(const listItem of lists){
            const basic = await getPokemonDatas(listItem.id);
            species = await getSpecies(listItem.id);
            ev = await getEvolutionChain(species.ev_chain_url);
            pokemon = {
                name:           basic.name,
                id:             basic.id,
                order:          basic.order,
                img:            basic.img,
                height:         basic.height,
                weight:         basic.weight,
                abilities:      basic.abilities,
                stats:          basic.stats,
                types:          basic.types,
                ev_chain:       ev.ev_chain,
                category:       species.category,
                descriptions:   species.descriptions
            }
            pokemons.push(pokemon);
        }
        return pokemons;
    }
}

export type ReturnTypes = ReturnSearchInit | ReturnSearchSuccess | ReturnSearchFailure;

export interface ThunkDispatch {        // 함수 타이핑 (오버로딩: 같은 함수를 다른 방식으로 사용)
    (thunkAction: ThunkAction): void,   // 리턴값이 있을 경우
    <A>(action: A): A,                  // 리턴값이 없을 경우
    <TAction>(action: TAction | ThunkAction): TAction;
}
type ThunkAction = (dispatch: ThunkDispatch) => void;

export const search = (sort: string, input: string) => async (dispatch: Dispatch<ReturnTypes>) => {
    console.log("sort: ", sort);
    dispatch({ type: SEARCH_INIT });
    try{
        const data = await createCard(sort, input);
        console.log("data", data);
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
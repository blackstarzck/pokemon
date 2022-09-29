const baseURL = "https://pokeapi.co/api/v2/";

interface Init {
    name: string,
    url?: string,
    id: number
}

interface Pokemon extends Init {
    order: number,
    img: string,
    height: string,
    weight: string,
    abilities: Array<{ name: string, url: string }>,
    stats: Array<{ name: string, stat: string }>,
    types: Array<object>
}

/**
 * [설명] 간단한 인터페이스가 들어가 있는 커스텀 fetch API입니다. 포켓몬 데이터 호출 시 광범위하게 사용하는 함수입니다.
 * @param url   : HTTP request를 위한 url
 * @returns     : HTTP request에 대한 응답 (false의 경우 네트워크 연결에 대한 에러, 데이터가 없어도 이는 에러가 아닌점 참고)
 */
 const fetchUrl = async (url: string): Promise<any> => {
    // console.log("fetchUrl url: ", url);
    try{
        const resp = await fetch(url);
        if(!resp.ok) console.log("[error] fetch response status: ", resp.status);

        const data = await resp.json();
        console.log("fetchUrl data: ", data);
        return data;
    }catch(e){
        console.log("fetchUrl error: ", e);
        return false;
    }
}

/**
 * [설명] 포켓몬의 디테일한 정보를 불러오기 전 선행으로 사용되어지는 함수입니다. (포켓몬의 id, name, url값을 불러옵니다.)
 * @param filter    : [필수] 필터타입에 따라 HTTP request url의 주소가 변경됩니다.
 * @param input     : 사용자의 검색어를 받아옵니다.
 * @param url       : fetch 함수에 들어갈 수 있는 url 주소입니다.
 * @returns getBasicInfo 함수의 결과값으로는 
 * 1. false: 데이터가 없을때
 * 2. 데이터가 하나 이상일때(객체리터럴)
 * 3. 단일 객체(객체)
 */
const getBasicInfo = async (filter: string = "pokemon", input: string, url?: string): Promise<any> => {
    const idOrName = input ? `/${input.toLowerCase()}` : "";
    const limitMax = 8;
    const limit = (input && filter !== "pokemon") ? "/?limit=1" : `/?limit=${limitMax}`;
    const newUrl = url ? url : `${baseURL}${filter}${idOrName}${limit}`
    const data = await fetchUrl(newUrl);
    let results;

    if(!data) return false;

    if((filter === "ability" || filter === "type") && !input) return false;

    if(input){
        if(filter === "type" || filter === "ability"){
            const tempArray = data.pokemon.slice(0, limitMax);
            results = tempArray.map((item: any) => ({
                    name: item.pokemon.name,
                    id: Number(item.pokemon.url.replace(`${baseURL}pokemon/`, "").replace(/.$/, "")),
                    url: item.pokemon.url
                }
            ));
            return results;
        }
        
        const { height, weight, name, id, order } = data; // height unit: decimetres to meters (h / 10), weight unit: hectograms to kilograms ( w / 10 )
        const abilities = data.abilities.map((item: any) => item.ability);
        const stats = data.stats.map((item: any) => { return { name: item.base_stat, stat: item.stat.name } });
        const types = data.types.map((item: any) => item.type.name);
        return {
            name, order, id,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            height: `${(height / 10)}m`, 
            weight: `${(weight / 10)}kg`,
            abilities, stats, types
        };
    }else{
        for(const listItem of data.results){
            const id = Number(listItem.url.replace(`${baseURL}${filter}/`, "").replace(/.$/, ""));
            listItem.id = id;
        }
        return data.results;
    }
}
/**
 * [설명] getBasicInfo 함수에서 받아온 id로 다시 HTTP 요청을해 해당 id의 포켓몬의 디테일한 정보를 불러옵니다.
 * @param param     : 포켓몬의 id입니다.
 * @param url       : fetch 함수에 들어갈 수 있는 url 주소입니다.
 * @returns name, id, order, img, height, weight, abilities, stats, types
 */
const getPokemonDatas = async (param: number, url?: string): Promise<Pokemon> => {
    const newUrl = url ? url : `${baseURL}pokemon/${param}`
    const data = await fetchUrl(newUrl);
    const { height, weight, name, id, order } = data; // height unit: decimetres to meters (h / 10), weight unit: hectograms to kilograms ( w / 10 )
    const abilities = data.abilities.map((item: any) => item.ability);
    const stats = data.stats.map((item: any) => { return { name: item.base_stat, stat: item.stat.name } });
    const types = data.types.map((item: any) => item.type.name);
    return { 
        name, order, id,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`, 
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

/**
 * [설명] 포켓몬의 진화정보를 담고있는 url주소를 받아옵니다.
 * @param param     : 포켓몬의 id 입니다.
 * @returns 진화정보를 가지고 있는 url 주소, category, descriptions
 */
const getSpecies = async (param: number): Promise<Spicies> => {
    let data = await fetchUrl(`${baseURL}pokemon-species/${param}`);

    if(!data.evolution_chain)
        data = await fetchUrl(data.evolves_from_species.url);
    
    const category = data.genera.filter((item: any) => item.language.name === "en");
    const descriptions = data.flavor_text_entries.filter((item: any) => item.language.name === "en");

    return {
        ev_chain_url: data.evolution_chain ? data.evolution_chain.url : data.evolves_from_species.url,
        category: category[0].genus.replace(" Pokémon", ""),
        descriptions: descriptions[0].flavor_text.replace(/\n/g, " ").replace(/\f/g, " ")
    }
}

interface Evolution {
    ev_chain: Array<object>,
}
/**
 * [설명] 포켓몬의 진화정보를 받아옵니다.
 * @param url   : getSpecies 함수에서 받아온 진화정보 url 입니다.
 * @returns 진화 단계별 포켓몬에 대한 정보를 리턴합니다.
 */
const getEvolutionChain = async (url: string): Promise<Evolution> => {
    const evResp = await fetch(url);
    const { chain } = await evResp.json();
    const newStr = (str: string) => str.replace(`${baseURL}pokemon-species/`, "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/").replace(/.$/, ".png");
    const ev_chain = [];

    if(chain && chain.evolves_to.length > 0){
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

export type ReturnCombinedDatas = CombinedDatas[] | boolean;

/**
 * [설명] 포켓몬의 모든 정보를 하나로 모아 사용자의 검색요청에 따라 카드를 구성하는 객체리터럴을 생성해주는 함수입니다.
 * @param filter 
 * @param input 
 * @returns 
 */
export const createCard = async (filter: string, input: string): Promise<ReturnCombinedDatas> => {
    const pokemons = [];
    let pokemon, species, ev;
    let lists = await getBasicInfo(filter, input);

    console.log("lists: ", lists);
    if(!lists) return false;
    
    if(filter === "pokemon" && input){ // 단일 결과
        species = await getSpecies(lists.id);
        ev      = await getEvolutionChain(species.ev_chain_url);
        pokemon = {
            ...lists,
            ev_chain:       ev.ev_chain,
            category:       species.category,
            descriptions:   species.descriptions
        }
        pokemons.push(pokemon);
    }else{
        for(const listItem of lists){ // 복수 결과
            const basic =   await getPokemonDatas(listItem.id);
            species     =   await getSpecies(listItem.id);
            ev          =   await getEvolutionChain(species.ev_chain_url);
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
    }
    console.log("pokemons", pokemons);
    return pokemons;
}
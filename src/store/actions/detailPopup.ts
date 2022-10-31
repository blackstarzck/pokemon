import { faJetFighter } from "@fortawesome/pro-solid-svg-icons";

export const IS_OPEN = "popup/IS_OPEN" as const;
export const IS_CLOSE = "popup/IS_CLOSE" as const;

interface PopupDispatch {
    type: string,
    payload: Pokemon | null
}

export interface Pokemon {
    name: string,           // Left
    id: string,             // Left
    types: string[],        // Left
    img: string,            // Left
    category: string,       // Right
    height: string,         // Right
    weight: string,         // Right
    descriptions: string    // Right
    stats: {                // Right
        stat: string,
        name: number
    }[],
    abilities: {            // Right
        name: string,
        url: string
    }[],
    ev_chain: {             // Bottom
        name: string,
        img: string,
        types: string[],
        id: string
    }[]
}

const setDetailPopup = (status: boolean, pokemon: Pokemon | null): PopupDispatch => {
    let type = status ? IS_OPEN : IS_CLOSE;
    let payload = pokemon

    return { type, payload };
}

export default setDetailPopup;
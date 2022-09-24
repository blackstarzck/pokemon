import { useEffect, useState } from "react";

const baseURL = "https://pokeapi.co/api/v2/";

export const useFetch = (type: string, limit: number = 8) => {
    const [ data, setData ] = useState(null);

    const fetchUrl = async (param: string) => {
        const response = await fetch(`${baseURL}${param}/?limit=${limit}`);
        const result = await response.json();

        console.log("url: ", `${baseURL}${param}/?limit=${limit}`);
        setData(result);
    }

    useEffect(() => {
        fetchUrl(type);
    }, []);

    return { data, fetchUrl};
}
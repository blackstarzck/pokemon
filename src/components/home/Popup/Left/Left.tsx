import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import { LeftStyles } from './Left.elements';
import { Pokemon } from '../../../../store/actions/detailPopup';
import { addZeros } from '../../../../api';

export interface Props {
    details: {
        name: string,       // Left
        id: string,         // Left
        types: string[],    // Left
        img: string,        // Left
    }
    pokemons: Pokemon[]
}

export function Left (props: Props) {
    const { name, id, types, img } = props.details;

    const handlePrevNext = (id: string): void => {
        console.log("id: ", id);
        console.log("pokemon: ", typeof props.pokemons, props.pokemons);

    }

    const setPokemonId = (state: string, id: string, range: Pokemon[]): string => {
        const idx = Number(id.replace(/[^0-9]/g, ""));
        const newIdx: number = (state === "prev") ? idx - 1 : idx + 1;
        let newid: string = addZeros(newIdx);

        for(const pokemon of range){

        }

        return newid;
    }

    useEffect(() => {

    }, [props.pokemons]);

    return (
    <LeftStyles className="left details-box">
        <div className="name-wrapper">
            <div className="wrapper">
                <h4 className="name">{name}</h4>
                <span className="number">{id}</span>
            </div>
            <ul className="type-wrapper">
                { types.map((type: string) => <li key={type} className={`type ${type}`}>{type}</li>) }
            </ul>
        </div>
        
        {/* 이미지 */}
        <div className={`img-box ${types[0]}`}>
            <img src={img} alt={name}/>
        </div>

        {/* 배경 */}
        <div className="bgc"><div className={`inner-circle ${types[0]}`}></div></div>
        
        <div className="btn-wrapper">
            <button onClick={() => handlePrevNext(setPokemonId("prev", id, props.pokemons))} className="prev"><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button onClick={() => handlePrevNext(setPokemonId("next", id, props.pokemons))} className="next"><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
    </LeftStyles>
    );
}

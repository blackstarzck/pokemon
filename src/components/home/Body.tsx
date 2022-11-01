import React, { FC, memo, useEffect, useLayoutEffect } from 'react';
import { BodyStyles } from './Body.elements';
import { Card } from './Card';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../store/reducers';
import { Heading } from './Heading';
import { search, ThunkDispatch } from '../../store/actions/search';
import { DetailPopup } from './Popup/DetailPopup';
import { Pokemon } from '../../store/actions/detailPopup';
import { PopupReducer } from '../../store/reducers/detailPopup';

export interface Props {}

export const Body: FC = memo((props: Props) => {
    const { data, success } = useSelector((state: RootState) => state.search);
    const { isLoaded } = useSelector((state: RootState) => state.loading);
    const popup: PopupReducer = useSelector((state: RootState) => state.popup);
    const dispatch = useDispatch<ThunkDispatch>();

    useLayoutEffect(() => {
        dispatch( search("pokemon", "") );
    }, []);

    useEffect(() => {
        console.log("Body data: ", data);
    }, [isLoaded]);

    console.log("%c■■■■■■■■■■■■■■■■■■■■■ 렌더: Body ■■■■■■■■■■■■■■■■■■■■■", "color: gray");

    return (
        <BodyStyles>
            <div className="section-head"><Heading /></div>
            <div className="section-body">
                { isLoaded 
                    ? <div className="loading"><div className="square"></div></div>
                    : success
                        ? <ul className="cards-wrapper">{data.pokemons.map((item: Pokemon, i: number) => <Card loaded={isLoaded} key={item.id} detail={item} delay={i * 0.1}/> )}</ul>
                        : <span className="">No Pokémon Matched Your Search!</span>
                }
            </div>
            { popup.payload && <DetailPopup details={popup.payload} pokemons={data.pokemons}/> }
        </BodyStyles>
    );
})
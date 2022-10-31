import React, { FC, useEffect, useLayoutEffect } from 'react';
import { BodyStyles } from './Body.elements';
import { Card } from './Card';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../store/reducers';
import { CombinedDatas } from '../../api';
import { Heading } from './Heading';
import { search, ThunkDispatch } from '../../store/actions/search';
import { DetailPopup } from './Popup/DetailPopup';
import { Pokemon } from '../../store/actions/detailPopup';
import { PopupReducer } from '../../store/reducers/detailPopup';

export interface Props {}

export const Body: FC = (props: Props) => {
    const { data } = useSelector((state: RootState) => state.search);
    const { isLoaded } = useSelector((state: RootState) => state.loading);
    const popup: PopupReducer = useSelector((state: RootState) => state.popup);
    const dispatch = useDispatch<ThunkDispatch>();

    useLayoutEffect(() => {
        dispatch( search("pokemon", "") );
    }, []);

    useEffect(() => {

    }, [data]);

    console.log("%c■■■■■■■■■■■■■■■■■■■■■ 렌더: Body ■■■■■■■■■■■■■■■■■■■■■", "color: gray");

    return (
        <BodyStyles>
            <div className="section-head">
                <Heading />
            </div>
            <div className="section-body">
                <ul className="cards-wrapper">
                    { isLoaded
                        ? <li className="loading"><div className="square"></div></li>
                        : data.pokemons 
                            ? data.pokemons.map((item: Pokemon, i: number) => <Card loaded={isLoaded} key={item.id} detail={item} delay={i * 0.1}/> )
                            : <li className="loading"><div className="square"></div></li> }
                </ul>
            </div>
            { popup.payload && <DetailPopup details={popup.payload}/> }
        </BodyStyles>
    );
}
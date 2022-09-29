import React, { FC, useEffect, useState } from 'react';
import { BodyStyles } from './Body.elements';
import { useDispatch } from "react-redux";
import { Card } from './Card';
import { Sort } from './Sort';
import { useSelector } from "react-redux";
import { RootState } from '../../store/reducers';
import { CombinedDatas } from '../../api';
import { ThunkDispatch } from '../../store/actions/search';
import setLoadingStatus from '../../store/actions/loading';

export interface Props {
}

export const Body: FC = (props: Props) => {
    const { pokemon } = useSelector((state: RootState) => state.search);
    const { isLoaded } = useSelector((state: RootState) => state.loading);
    const dispatch = useDispatch<ThunkDispatch>();
    
    useEffect(() => {
        console.log("마운트", pokemon);
        (pokemon.length > 0) && dispatch(setLoadingStatus(false));
    }, [pokemon]);


    console.log("%c■■■■■■■■■■■■■■■■■■■■■ 렌더: Body ■■■■■■■■■■■■■■■■■■■■■", "color: gray");

    return (
        <BodyStyles>
            <div className="section-head">
                <h2 className="sub-title">Pokemon</h2>
                <Sort />
            </div>
            <div className="section-body">
                <div className="info-box">
                    <div className="info">
                        {  }
                        <span className="heading">Description:</span>
                        {/* Description: Prevents the use of explosive moves, such as Self-Destruct, 
                        by dampening its surroundings. */}
                        <div className="type electric">Electric</div>
                        <div className="type ground">Ground</div>
                    </div>
                </div>
                <ul className="cards-wrapper">
                    { pokemon 
                        ? pokemon.map((item: CombinedDatas, i) => <Card loaded={isLoaded} key={item.id} detail={item} delay={i * 0.1}/> )
                        : "" }
                </ul>
            </div>
        </BodyStyles>
    );
}

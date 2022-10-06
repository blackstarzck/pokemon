import React, { FC } from 'react';
import { BodyStyles } from './Body.elements';
import { Card } from './Card';
import { useSelector } from "react-redux";
import { RootState } from '../../store/reducers';
import { CombinedDatas } from '../../api';
import { Heading } from './Heading';

export interface Props {
}

export const Body: FC = (props: Props) => {
    const { data } = useSelector((state: RootState) => state.search);
    const { isLoaded } = useSelector((state: RootState) => state.loading);

    console.log("%c■■■■■■■■■■■■■■■■■■■■■ 렌더: Body ■■■■■■■■■■■■■■■■■■■■■", "color: gray");

    return (
        <BodyStyles>
            <div className="section-head">
                <Heading />
            </div>
            <div className="section-body">
                <ul className="cards-wrapper">
                    { data.pokemons 
                        ? data.pokemons.map((item: CombinedDatas, i: number) => <Card loaded={isLoaded} key={item.id} detail={item} delay={i * 0.1}/> )
                        : "" }
                </ul>
            </div>
        </BodyStyles>
    );
}
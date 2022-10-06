import React, { FC, useEffect, useRef } from 'react';
import { CardStyles } from './Cards.elements';
import { CombinedDatas } from '../../api';
import { animateCards, setDefaultPosition } from '../../gsap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { stat } from 'fs';

interface Props {
    loaded: boolean,
    detail: CombinedDatas,
    delay: number
}

export const Card: FC<Props> = props => {
    const cardRef = useRef<HTMLElement>(null);
    const sort = useSelector((state: RootState) => state.sort);

    useEffect(() => {
        const card = cardRef.current as HTMLElement;
        sort.isOpen || animateCards(card, props.delay);
    }, [sort]);

    useEffect(() => {
        const card = cardRef.current as HTMLElement;
        animateCards(card, props.delay);
    }, []);

    if(!props.detail){
        return(
            <CardStyles>
                <div className="loading"></div>
            </CardStyles>
        );
    }
    return (
        <CardStyles ref={cardRef} loaded={props.detail} >
            <div className="img-box">
                <img src={props.detail.img} alt={props.detail.name} />
            </div>
            <div className="descr-box">
                <div className="number">{props.detail.id}</div>
                <div className="name">{props.detail.name}</div>
                <ul className="type-wrapper">
                    { props.detail.types.map((item: any, i ) => <li key={i} className={`type ${item}`}>{item}</li> )}
                </ul>
            </div>
        </CardStyles>
    );
}


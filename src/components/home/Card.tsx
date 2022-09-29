import React, { FC, useEffect, useRef } from 'react';
import { CardStyles } from './Cards.elements';
import { CombinedDatas } from '../../api';
import { animateCards, setDefaultPosition } from '../../gsap';

interface Props {
    loaded: boolean,
    detail: CombinedDatas,
    delay: number
}

export const Card: FC<Props> = props => {
    const cardRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const card = cardRef.current as HTMLElement;
        console.log("로드완료: ", props.detail.name, props.detail.id);
        animateCards(card, props.delay);
    }, [props.detail]);

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


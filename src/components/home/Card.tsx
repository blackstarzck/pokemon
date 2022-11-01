import React, { FC, memo, useCallback, useEffect, useRef } from 'react';
import { CardStyles } from './Cards.elements';
import { CombinedDatas } from '../../api';
import { animateCards } from '../../gsap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import setDetailPopup, { Pokemon } from '../../store/actions/detailPopup';

interface Props {
    loaded: boolean,
    detail: Pokemon,
    delay: number
}

export const Card: FC<Props> = memo(props => {
    const cardRef = useRef<HTMLLIElement>(null);
    const sort = useSelector((state: RootState) => state.sort);
    const dispatch = useDispatch();

    const handlePopup = useCallback(()=> {
        const detail = props.detail;
        // console.log("선택한 포켓몬: ", detail);
        
        dispatch( setDetailPopup(true, detail) );
    },[props.detail.id]);

    useEffect(() => {
        const card = cardRef.current as HTMLLIElement;
        sort.isOpen || animateCards(card, props.delay);
    }, [sort]);

    useEffect(() => {
        const card = cardRef.current as HTMLLIElement;
        animateCards(card, props.delay);

        console.log(props.detail.id + " 로드~!", );
    }, []);

    if(!props.detail){
        return(
            <CardStyles>
                <div className="loading"></div>
            </CardStyles>
        );
    }
    return (
        <CardStyles ref={cardRef} loaded={props.detail} onClick={() => handlePopup()}>
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
})


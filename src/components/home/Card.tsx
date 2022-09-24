import React, { FC } from 'react';
import { CardStyles } from './Cards.elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/pro-regular-svg-icons';

interface Props {
    loaded: boolean
}

export const Card: FC<Props> = props => {

    if(!props.loaded){
        return(
            <CardStyles loaded={props.loaded} >
                <div className="loading"></div>
            </CardStyles>
        );
    }
    return (
        <CardStyles loaded={props.loaded} >
            <div className="img-box">
                <img src="./image/test.png" alt="pokemon" />
            </div>
            <div className="descr-box">
                <div className="number">#025</div>
                <div className="name">Pikachu</div>
                <ul className="type-wrapper">
                    <li className="type electric">Electric</li>
                </ul>
            </div>
        </CardStyles>
    );
}

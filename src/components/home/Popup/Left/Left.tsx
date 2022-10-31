import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import { LeftStyles } from './Left.elements';

export interface Props {
    details: {
        name: string,       // Left
        id: string,         // Left
        types: string[],    // Left
        img: string,        // Left
    }
}

export function Left (props: Props) {
    const { name, id, types, img } = props.details;

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
            <button className="prev"><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button className="next"><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
    </LeftStyles>
    );
}

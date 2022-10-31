import React from 'react';
import { getPokemonDatas } from '../../../../api';
import { BottomStyles } from './Bottom.elements';

export interface Props {
    details: {
        ev_chain: {         // Bottom
            name: string,
            img: string,
            types: string[],
            id: string
        }[]
    }
}

export function Bottom (props: Props) {
    const { ev_chain } = props.details;

    return (
    <BottomStyles className="bottom details-box">
        <h4 className="info-heading">Evolutions</h4>
        <div className="ev-box">
            <ul>
                {ev_chain.map((item: any) =>
                    <li key={item.id} className="card">
                        <div className="img-box">
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className="descr-box">
                            <div className="name-wrapper">
                                <span className="name">{item.name}</span>
                                <span className="number">{item.id}</span>
                            </div>
                            <ul className="type-wrapper">
                                { item.types.map((type: string) => <li key={type} className={`type ${type}`}>{type}</li> ) }
                            </ul>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    </BottomStyles>

    );
}

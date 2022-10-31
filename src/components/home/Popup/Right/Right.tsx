import React from 'react';
import { RightStyles } from './Right.elements';

export interface Props {
    details: {
        category: string,       // Right
        height: string,         // Right
        weight: string,         // Right
        descriptions: string    // Right
        stats: {                // Right
            stat: string,
            name: number
        }[],
        abilities: {            // Right
            name: string,
            url: string
        }[]
    }
}

export function Right (props: Props) {
    const { category, height, weight, abilities, descriptions, stats } = props.details;

    return (
    <RightStyles className="right details-box">
        <article className="info-box about">
            <h4 className="info-heading">About</h4>
            <ul>
                <li className="dt"><i className="label">Category:</i> {category}</li>
                <li className="dt"><i className="label">Height:</i> {height}</li>
                <li className="dt"><i className="label">Weight:</i> {weight}</li>
            </ul>
            <p className="descr">{descriptions}</p>
        </article>
        <article className="info-box stats">
            <h4 className="info-heading">Stats</h4>
            <ul>
                { stats.map((item: any) => <li key={item.stat} className="dt"><i className="label">{item.stat}</i><div className="exp-bar"><div style={{width: `${item.name}%`}}className="inner"></div></div></li> ) }
            </ul>
        </article>
        <article className="info-box abilities">
            <h4 className="info-heading">Abilities</h4>
            <ul>
                { abilities.map((ability: any) => <li key={ability.name} className="dt">{ability.name}</li> ) }
            </ul>
        </article>
    </RightStyles>
    );
}

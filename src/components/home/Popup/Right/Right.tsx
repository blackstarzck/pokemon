import React from 'react';
import { RightStyles } from './Right.elements';

export interface Props {
}

export function Right (props: Props) {
  return (
    <RightStyles className="right details-box">
        <article className="info-box about">
            <h4 className="info-heading">About</h4>
            <ul>
                <li className="dt"><i className="label">Category:</i> mouse</li>
                <li className="dt"><i className="label">Height:</i> 6cm</li>
                <li className="dt"><i className="label">Weight:</i> 7.5kg</li>
            </ul>
            <p className="descr">Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.</p>
        </article>
        <article className="info-box stats">
            <h4 className="info-heading">Stats</h4>
            <ul>
                <li className="dt"><i className="label">HP</i><div className="exp-bar"><div className="inner"></div></div></li>
                <li className="dt"><i className="label">Attack</i><div className="exp-bar"><div className="inner"></div></div></li>
                <li className="dt"><i className="label">Defense</i><div className="exp-bar"><div className="inner"></div></div></li>
                <li className="dt"><i className="label">Special Attack</i><div className="exp-bar"><div className="inner"></div></div></li>
                <li className="dt"><i className="label">Special Defense</i><div className="exp-bar"><div className="inner"></div></div></li>
                <li className="dt"><i className="label">Speed</i><div className="exp-bar"><div className="inner"></div></div></li>
            </ul>
        </article>
        <article className="info-box abilities">
            <h4 className="info-heading">Abilities</h4>
            <ul>
                <li className="dt">Arena Trap</li>
                <li className="dt">Compound Eyes</li>
                <li className="dt">Damp</li>
                <li className="dt">Curious Medicine</li>
            </ul>
        </article>
    </RightStyles>
  );
}

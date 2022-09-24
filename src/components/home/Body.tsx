import React, { FC } from 'react';
import { BodyStyles } from './Body.elements';
import { Card } from './Card';
import { Sort } from './Sort';

export interface Props {
}

export const Body: FC = (props: Props) => {
    return (
        <BodyStyles>
            <div className="section-head">
                <h2 className="sub-title">Pokemon</h2>

                <Sort />
            </div>
            <div className="section-body">
                <div className="info-box">
                    <div className="info">
                        <span className="heading">Description:</span>
                        {/* Description: Prevents the use of explosive moves, such as Self-Destruct, 
                        by dampening its surroundings. */}
                        <div className="type electric">Electric</div>
                        <div className="type ground">Ground</div>
                    </div>
                </div>
                <ul className="cards-wrapper">
                    <Card loaded={true}/>
                </ul>
            </div>
        </BodyStyles>
    );
}

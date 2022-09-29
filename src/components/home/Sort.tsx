import React, { FC, memo } from 'react';
import { SortStyles } from './Sort.elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/pro-solid-svg-icons'

export interface Props {
}

export const Sort: FC = memo((props: Props) => {

    console.log("%c■■■■■■■■■■■■■■■■■■■■■ 렌더: Sort ■■■■■■■■■■■■■■■■■■■■■", "color: gray");

    return (
        <SortStyles>
            <span className="head">Sort</span>
            <div className="select-box">
                <div className="selected">
                    <span>Lowest Number</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
                <ul className="option-wrapper">
                    <li className="option">Lowest Number</li>
                    <li className="option">Highest Number</li>
                    <li className="option">A-Z</li>
                    <li className="option">Z-A</li>
                </ul>
            </div>
        </SortStyles>
    );
});

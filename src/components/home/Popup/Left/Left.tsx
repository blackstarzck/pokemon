import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import { LeftStyles } from './Left.elements';

export interface Props {
}

export function Left (props: Props) {
  return (
    <LeftStyles className="left details-box">
        <div className="name-wrapper">
            <div className="wrapper">
                <h4 className="name">pikachu</h4>
                <span className="number">#025</span>
            </div>
            <ul className="type-wrapper">
                <li className="type electric">electric</li>
                <li className="type electric">electric</li>
            </ul>
        </div>
        
        {/* 이미지 */}
        <div className="img-box electric">
            <img src="/image/test.png" alt="테스트"/>
        </div>

        {/* 배경 */}
        <div className="bgc"><div className="inner-circle electric"></div></div>
        
        <div className="btn-wrapper">
            <button className="prev"><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button className="next"><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
    </LeftStyles>
  );
}

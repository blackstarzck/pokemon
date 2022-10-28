import React from 'react';
import { BottomStyles } from './Bottom.elements';

export interface Props {
}

export function Bottom (props: Props) {
  return (
    <BottomStyles className="bottom details-box">
        <h4 className="info-heading">Evolutions</h4>
        <div className="ev-box">
            <ul>
                <li className="card">
                    <div className="img-box">
                        <img src="/image/test.png" alt="테스트" />
                    </div>
                    <div className="descr-box">
                        <div className="name-wrapper">
                            <span className="name">pikachu</span>
                            <span className="number">#025</span>
                        </div>
                        <ul className="type-wrapper">
                            <li className="type electric">electric</li>
                            <li className="type fighting">fighting</li>
                        </ul>
                    </div>
                </li>
                <li className="card">
                    <div className="img-box">
                        <img src="/image/test.png" alt="테스트" />
                    </div>
                    <div className="descr-box">
                        <div className="name-wrapper">
                            <span className="name">pikachu</span>
                            <span className="number">#025</span>
                        </div>
                        <ul className="type-wrapper">
                            <li className="type electric">electric</li>
                            <li className="type fighting">fighting</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </BottomStyles>

  );
}

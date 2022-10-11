import { faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { DetailPopupStyles } from './DetailPopup.elements';

export interface Props {
}

export function DetailPopup (props: Props) {
    return (
        <DetailPopupStyles>
            <div className="container">

                {/* TOP */}
                <div className="top wrapper">

                    {/* TOP - LEFT */}
                    <section className="left details-box">
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
                        <div className="img-box">
                            <img src="/image/test.png" alt="테스트"/>
                        </div>

                        {/* 배경 */}
                        <div className="bgc">
                            <div className="inner-circle"></div>
                        </div>
                        
                        <div className="btn-wrapper">
                            <button className="prev"><FontAwesomeIcon icon={faChevronLeft} /></button>
                            <button className="next"><FontAwesomeIcon icon={faChevronRight} /></button>
                        </div>
                    </section>

                    {/* TOP -RIGHT */}
                    <section className="right details-box">
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
                    </section>
                </div>
                {/* BOTTOM */}
                <section className="bottom details-box">
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
                </section>
            </div>
        </DetailPopupStyles>
    );
}

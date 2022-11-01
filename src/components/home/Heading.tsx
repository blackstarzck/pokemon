import React, { FC, useEffect, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search, ThunkDispatch } from '../../store/actions/search';
import { RootState } from '../../store/reducers';
import { HeadingStyles } from './Heading.elements';
import { Sort } from './Sort';

export interface Props {}

export const Heading: FC = memo((props: Props) => {
    const { filter } = useSelector((state: RootState) => state.filter);
    const { data } = useSelector((state: RootState) => state.search);
    const dispatch = useDispatch<ThunkDispatch>();

    useEffect(() => {
        console.log("[Heading] filter: ", filter, data);
    }, [filter]);

    console.log("%c■■■■■■■■■■■■■■■■■■■■■ 렌더: Heading ■■■■■■■■■■■■■■■■■■■■■", "color: gray");

    return (
        <HeadingStyles>
            <div className="intro-box">
                <div className="wrap">
                    <h2 className="sub-title">{filter}</h2>
                    <Sort/>
                </div>
                <div className="info-box">
                    <div className="info">
                        <span className="heading">
                            { (filter !== "pokemon")
                            ? (filter === "ability")
                                ? `${data.abName ? (data.abName + ": " + data.abEffect) : ""}`
                                : `${data.oppTypes?.length > 0 ? "Weekness: " : ""}`
                            : "" }
                        </span>
                        { filter === "type" && data.oppTypes?.map((elem: any, i: number) => <div onClick={() => dispatch( search("type", elem) )} key={i} className={`type ${elem}`}>{elem}</div> )}
                    </div>
                </div>
            </div>
        </HeadingStyles>
    );
});

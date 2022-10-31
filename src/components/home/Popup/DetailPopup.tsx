import React, { useEffect, useRef } from 'react';
import { DetailPopupStyles } from './DetailPopup.elements';
import { gsap } from "gsap";
import { Left } from './Left/Left';
import { Right } from './Right/Right';
import { Bottom } from './Bottom/Bottom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { Pokemon } from '../../../store/actions/detailPopup';

export interface Props {
    details: any
}

export function DetailPopup (props: Props) {
    const contRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const app = useRef();
    const tl = useRef<GSAPTimeline>();
    

    useEffect(() => {
        // let ctx = gsap.context(() => {
        //     gsap.timeline()
        //         .to(leftRef.current, { rotate: 360 })
        //         .to(leftRef.current, { rotate: -360 });
        // });
    }, [contRef]);

    useEffect(() => {
        console.log("props.detail: ", props.details);
    }, [props.details.type]);

    console.log("%c■■■■■■■■■■■■■■■■■■■■■ 렌더: DetailPopup ■■■■■■■■■■■■■■■■■■■■■", "color: gray");

    return (
        <DetailPopupStyles step={""}>
            <div className="dimmedBg"></div>
            <div ref={contRef} className="container">
                <Left details={props.details} />
                <Right details={props.details} />
                <Bottom details={props.details} />
            </div>
        </DetailPopupStyles>
    );
}

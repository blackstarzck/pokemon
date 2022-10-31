import React, { useCallback, useEffect, useRef } from 'react';
import { DetailPopupStyles } from './DetailPopup.elements';
import { gsap } from "gsap";
import { Left } from './Left/Left';
import { Right } from './Right/Right';
import { Bottom } from './Bottom/Bottom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import setDetailPopup, { Pokemon } from '../../../store/actions/detailPopup';

export interface Props {
    details: any
}

export function DetailPopup (props: Props) {
    const contRef = useRef<HTMLDivElement>(null);
    const app = useRef();
    const tl = useRef<GSAPTimeline>();
    const dispatch = useDispatch();
    

    useEffect(() => {
        const container = contRef.current as HTMLDivElement;
        let ctx = gsap.context(() => {
            gsap.timeline()
                .fromTo(container.children, { opacity: 0, y: -10}, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.2,
                    ease: "back.in",
                    onComplete: function(){}
                })
        });

        console.log("contRef: ", contRef);
    }, [contRef]);

    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            e.key === "Escape" && closePopup();
        });
    }, []);

    console.log("%c■■■■■■■■■■■■■■■■■■■■■ 렌더: DetailPopup ■■■■■■■■■■■■■■■■■■■■■", "color: gray");

    const closePopup = useCallback(() => {
        console.log("close!!!");
        dispatch( setDetailPopup(false, null) );
    }, []);

    return (
        <DetailPopupStyles step={""}>
            <div onClick={() => closePopup()} className="dimmedBg"></div>
            <div ref={contRef} className="container">
                <Left details={props.details} />
                <Right details={props.details} />
                <Bottom details={props.details} />
            </div>
        </DetailPopupStyles>
    );
}

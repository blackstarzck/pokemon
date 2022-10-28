import React, { useEffect, useRef } from 'react';
import { DetailPopupStyles } from './DetailPopup.elements';
import { gsap } from "gsap";
import { Left } from './Left/Left';
import { Right } from './Right/Right';
import { Bottom } from './Bottom/Bottom';

export interface Props {
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

    return (
        <DetailPopupStyles step={""}>
            <div className="dimmedBg"></div>
            <div ref={contRef} className="container">
                <Left />
                <Right />
                <Bottom />
            </div>
        </DetailPopupStyles>
    );
}

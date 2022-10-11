import { gsap } from "gsap";

/**
 * GSAP document
 * @version 3.11.2
 * @see https://greensock.com/docs/v3/GSAP
 * @see https://greensock.com/react/
 */

interface Position {
    transform: {
        x: string | number,
        y: string | number
    },
    x: number,
    y: number,
    elem: HTMLElement
}

export const setDefaultPosition = (elem: HTMLElement): void => {
    gsap.set(elem, { x: 0, y: 0 });
    const x =  gsap.getProperty(elem, "x");
    const y =  gsap.getProperty(elem, "y");
    const pos = {
        transform: { x, y },
        x: elem.offsetLeft,
        y: elem.offsetTop,
        elem
    };
}

export const animateCards = (elem: HTMLElement, delay?: number): void => {
    gsap.fromTo(elem, 0.3, { y: -10, opacity: 0 }, { y: 0, opacity: 1, delay: delay });
}
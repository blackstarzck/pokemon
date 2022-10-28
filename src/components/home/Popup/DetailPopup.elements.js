import styled, { css } from "styled-components";

export const popupW = 898;     // 팝업 최대 너비
export const gridGap = 26;     // 그리드 갭
export const w50 = 50;         // 너비 50
export const mr60 = 110;       // margin-right 60

export const DetailPopupStyles = styled.div`
    text-transform: capitalize;

    .dimmedBg {
        width: 100vw;
        height: 100%;
        position: fixed;
        top: 0; left: 0;
        background-color: rgba(0, 0, 0, .5);
        backdrop-filter: blur(4px);
    }

    .container {
        ${ props => props.step === "step1"
            ? css`display: block; width: 356px; height: 356px; border-radius: 50%;`
            : css`display: grid; width: ${`${popupW}px`};`
        }
        grid-template-columns: ${ `${(popupW/2) - (gridGap/2)}px ${(popupW/2) - (gridGap/2)}px` };
        grid-gap: ${`${gridGap}px`};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const SectionStyles = styled.section`
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: ${ props => props.theme.boxShadow.type2 };
    padding: 20px; overflow: hidden;
`;
import styled, { css } from "styled-components";
import { mr60, SectionStyles, w50 } from "../DetailPopup.elements";

export const BottomStyles = styled(SectionStyles)`
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: ${ props => props.theme.boxShadow.type2 };

    &.bottom {
        ${ props => props.step === "step1" && css`visibility: hidden; display: none;` }
        grid-column: 1/3;
        padding-bottom: 54px;

        h4.info-heading {
            font-size: 2.25rem;
            font-weight: 800;
            line-height: 44px;
        }
        
        .ev-box {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 30px;

            ul { display: flex; }
        }

        li.card {
            width: 172px;
            padding: 0 10px 10px;
            background-color: ${ props => props.theme.colors.gray1 };
            border-radius: 5px;
            position: relative;

            .img-box {
                width: 152px;
                height: 152px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 10px;

                img { width: 90%; }
            }
            .name-wrapper {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;

                span.name {
                    font-size: 1.25rem;
                    font-weight: 800;
                    line-height: 24px;
                }
                span.number {
                    font-size: .875rem;
                    font-weight: 400;
                    color: ${ props => props.theme.colors.gray3 };
                    align-self: flex-end;
                }
            }
            .type-wrapper {
                display: flex;
                justify-content: space-between;

                li.type {
                    width: calc((100% / 2) - 6px);
                    line-height: 20px;
                    height: 20px;
                    border-radius: 25px;
                    text-align: center;
                    font-size: .875rem;
                    color: #ffffff;

                    &.bug       { background-color: ${ props => props.theme.symbols.bug } }
                    &.dragon    { background-color: ${ props => props.theme.symbols.dragon } }
                    &.Fairy     { background-color: ${ props => props.theme.symbols.Fairy } }
                    &.fire      { background-color: ${ props => props.theme.symbols.fire } }
                    &.ghost     { background-color: ${ props => props.theme.symbols.ghost } }
                    &.ground    { background-color: ${ props => props.theme.symbols.ground } }
                    &.normal    { background-color: ${ props => props.theme.symbols.normal }; color: #444444 }
                    &.psychic   { background-color: ${ props => props.theme.symbols.psychic } }
                    &.steel     { background-color: ${ props => props.theme.symbols.steel } }
                    &.dark      { background-color: ${ props => props.theme.symbols.dark } }
                    &.electric  { background-color: ${ props => props.theme.symbols.electric }; color: #444444 }
                    &.fighting  { background-color: ${ props => props.theme.symbols.fighting } }
                    &.flying    { background-color: ${ props => props.theme.symbols.flying } }
                    &.grass     { background-color: ${ props => props.theme.symbols.grass } }
                    &.ice       { background-color: ${ props => props.theme.symbols.ice }; color: #444444 }
                    &.poison    { background-color: ${ props => props.theme.symbols.poison } }
                    &.rock      { background-color: ${ props => props.theme.symbols.rock } }
                    &.water     { background-color: ${ props => props.theme.symbols.water } }
                }
            }

            &:not(:last-child) {
                margin-right: ${`${mr60}px`};
            }
            &:not(:last-child)::after {
                content: "";
                width: ${`${w50}px`};
                height: ${`${w50}px`};
                background: url("/icon/arrow-right.png") no-repeat center / contain;
                position: absolute;
                top: 0;
                right: ${ `${ ((w50 - mr60) / 2) - w50  }px` };
                bottom: 0;
                margin: auto;
            }
        }
    }
`;
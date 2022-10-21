import styled, { css } from "styled-components";

const popupW = 898;     // 팝업 최대 너비
const gridGap = 26;     // 그리드 갭
const w50 = 50;         // 너비 50
const mr60 = 110;       // margin-right 60

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

    .wrapper { display: flex; }

    section { padding: 20px; overflow: hidden; }

    section.details-box {
        border-radius: 5px;
        background-color: #ffffff;
        box-shadow: ${ props => props.theme.boxShadow.type2 };
    }

    section.left {
        position: relative;
        ${ props => props.step === "step1" && css`width: 356px; height: 356px; border-radius: 50%;` };

        .name-wrapper {
            width: 100%;
            visibility: ${ props => props.step === "step1" ? "hidden" : "visible"};
            position: absolute;
            top: 20px; left: 0;
            z-index: 2;
            padding: 0 20px;

            .wrapper {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 10px;
            }
        }

        h4.name {
            font-size: 2.25rem;
            font-weight: 900;
            line-height: 44px;
        }
        .number {
            font-size: 1.25rem;
            font-weight: 400;
            color: ${ props => props.theme.colors.gray4 }
        }

        li.type {
            display: inline-block;
            font-size: .875rem;
            background-color: rgba(255, 255,255, .5);
            border-radius: 15px;
            height: 25px;
            line-height: 25px;
            padding: 0 25px;
            
            &:not(:last-child){
                margin-right: 15px;
            }
        }
        .bgc {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            position: absolute;
            top: 0; left: 0;
            overflow: hidden;

            .inner-circle {
                width: 200px;
                height: 200px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(2);
                z-index: 1;
                transition: all .2s ease;
                border-radius: 50%;
                color: #ffffff;
                outline: 1px solid red;
            }
        }

        .img-box {
            width: 356px;
            height: 356px;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
            display: flex;
            justify-content: center;
            align-items: center;
            outline: 1px solid green;

            img { width: 90%; }
        }

        .btn-wrapper {
            visibility: ${ props => props.step === "step1" ? "hidden" : "visible"};
            width: 100%;
            display: flex;
            justify-content: space-between;
            position: absolute;
            bottom: 20px; left: 0; right: 0; margin: auto;
            z-index: 2;
            padding: 0 20px;

            button {
                width: 60px;
                height: 60px;
                background-color: rgba(0,0,0,0.7);
                border-radius: 50%;
                color: #ffffff;

                svg { width: 17px; height: 100%; }
            }
        }
    }
    section.right {
        ${ props => props.step === "step1" && css`visibility: hidden; display: none;` }


        h4.info-heading {
            font-size: 1.625rem;
            font-weight: 800;
            line-height: 31px;
            margin-bottom: 17px;
        }
        article:not(:last-child) {
            margin-bottom: 40px;
        }
        article.about {
            p.descr {
                text-transform: none;
                color: ${ props => props.theme.colors.gray4 };
                margin-top: 17px;
            }
            li.dt {
                font-weight: 400;
                color: ${ props => props.theme.colors.gray4 };
                
                i.label {
                    font-weight: 500;
                    color: #000000;
                }
                &:not(:last-child){ margin-bottom: 6px; }
            }
        }
        article.stats {
            li.dt {
                display: flex;
                align-items: center;

                i.label { display: block; width: 172px; }
                .exp-bar {
                    width: calc(100% - 172px);
                    height: 10px;
                    border-radius: 5px; background-color: ${ props => props.theme.colors.gray1 };
                    position: relative;

                    .inner {
                        width: 50%;
                        height: 100%;
                        border-radius: 5px;
                        position: absolute;
                        top: 0; left: 0;
                        background-color: ${props => props.theme.colors.expRed };
                        transition: all .2s ease;
                    }
                }

                &:not(:last-child) { margin-bottom: 12px; }

                &:nth-child(2n) .inner{
                    background-color: ${props => props.theme.colors.expGreen };
                }
            }
        }
        article.abilities {
            li.dt {
                display: inline-block;
                height: 25px;
                line-height: 25px;
                padding: 0 12px;
                background-color: ${ props => props.theme.colors.gray1 };
                border-radius: 15px;

                &:not(:last-child) {margin: 0 10px 10px 0; }
            }
        }
    }
    section.bottom {
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
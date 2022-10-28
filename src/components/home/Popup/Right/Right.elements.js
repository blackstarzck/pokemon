import styled, { css } from "styled-components";
import { SectionStyles } from "../DetailPopup.elements";

export const RightStyles = styled(SectionStyles)`
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: ${ props => props.theme.boxShadow.type2 };

    &.right {
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
`;
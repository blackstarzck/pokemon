import styled, { css } from "styled-components";
import { SectionStyles } from "../DetailPopup.elements";

export const LeftStyles = styled(SectionStyles)`
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: ${ props => props.theme.boxShadow.type2 };

    &.left {
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
`;
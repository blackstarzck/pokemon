import styled, { css } from "styled-components";

export const CardStyles = styled.li`
    width: 100%;
    height: 349px;
    border-radius: 5px;
    background-color: ${ props => props.theme.colors.gray1 };
    cursor: pointer;   

    ${ props => !props.loaded && css`
        display: flex;
        justify-content: center;
        align-items: center;

        & > .loading {
            width : 40px;
            height: 40px;
            display: inline-block;
            position: relative;
            animation: rotate 1s linear infinite;

            &::after, &::before {
                content: '';
                position: absolute;
                width: 20px;
                height: 20px;
                top: 50%;
                left: 50%;
                transform: scale(0.5) translate(0 , 0);
                background-color: ${ props => props.theme.colors.gray2 };
                border-radius: 50%;
                animation: spin 1s infinite ease-in-out;
            }
            &::before {
                background-color: ${ props => props.theme.colors.gray3 };
                transform: scale(0.5) translate( -40px , -40px);
            }

            @keyframes rotate {
                0% { transform: rotate(0deg) }
                100% { transform: rotate(360deg) }
            }
            @keyframes spin {
                50% { transform: scale(1) translate(-50% , -50%)}
            }
        }
    `}

    .img-box {
        width: 100%;
        height: 238px;
        display: flex; justify-content: center; align-items: center;
        img { height: 90%; vertical-align: top; }
    }

    .descr-box {
        padding: 10px;
        .number {
            color: ${ props => props.theme.colors.gray3 };
            font-weight: 300;
            margin-bottom: 5px;
        }
        .name {
            font-size: ${ props => props.theme.font.mainName };
            font-weight: 800;
            margin-bottom: 15px;
        }
        .type {
            width: calc((100% / 2) - 18px);
            height: 20px;
            border-radius: 5px;
            font-size: ${ props => props.theme.font.descr };
            line-height: 20px;
            text-align: center;

            &.bug       { background-color: #1DE9B6 }
            &.dragon    { background-color: #FF9100 }
            &.Fairy     { background-color: #C6FF00 }
            &.fire      { background-color: #FF3D00 }
            &.ghost     { background-color: #D500F9 }
            &.ground    { background-color: #4E342E }
            &.normal    { background-color: #ECECEC; color: #444444 }
            &.psychic   { background-color: #F50057 }
            &.steel     { background-color: #37474F }
            &.dark      { background-color: #424242 }
            &.electric  { background-color: #FFEA00; color: #444444 }
            &.fighting  { background-color: #8D6E63 }
            &.flying    { background-color: #00B0FF }
            &.grass     { background-color: #00E676 }
            &.ice       { background-color: #84FFFF; color: #444444 }
            &.poison    { background-color: #651FFF }
            &.rock      { background-color: #3E2723 }
            &.water     { background-color: #2979FF }
        }
    }
`;
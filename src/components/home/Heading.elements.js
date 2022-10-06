import styled from "styled-components";

export const HeadingStyles = styled.div`
    .sub-title {
        font-size: ${ props => props.theme.font.subTitle1 };
        font-weight: 900;
        letter-spacing: -.6px;
        line-height: 56px;
        text-transform: capitalize;
    }

    .intro-box > .wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .info-box {
        /* max-width: 558px; */
        /* height: 44px; */
        font-size: 1rem;
        color: ${ props => props.theme.colors.gray4 };
        margin-top: 14px;

        span.heading { font-weight: 400; margin-right: 5px; text-transform: capitalize; line-height: 24px; }
        p.info { display: inline-block; }

        .type {
            display: inline-block;
            padding: 0 12px;
            height: 25px;
            line-height: 25px;
            border-radius: 5px;
            color: #ffffff;
            cursor: pointer;
            
            &:not(:last-child){ margin-right: 8px; }

            &.bug       { background-color: #1DE9B6 }
            &.dragon    { background-color: #FF9100 }
            &.Fairy     { background-color: #C6FF00 }
            &.fire      { background-color: #FF3D00 }
            &.ghost     { background-color: #D500F9 }
            &.ground    { background-color: #4E342E }
            &.normal    { background-color: #ECECEC; color: #444444; }
            &.psychic   { background-color: #F50057 }
            &.steel     { background-color: #37474F }
            &.dark      { background-color: #424242 }
            &.electric  { background-color: #FFEA00; color: #444444; }
            &.fighting  { background-color: #8D6E63 }
            &.flying    { background-color: #00B0FF }
            &.grass     { background-color: #00E676 }
            &.ice       { background-color: #84FFFF; color: #444444; }
            &.poison    { background-color: #651FFF }
            &.rock      { background-color: #3E2723 }
            &.water     { background-color: #2979FF }
        }
    }
`;
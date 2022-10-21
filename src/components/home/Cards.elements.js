import styled, { css } from "styled-components";

export const CardStyles = styled.li`
    opacity: 0;
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
            text-transform: capitalize;
            margin-bottom: 15px;
        }
        .type-wrapper {
            display: flex;
            justify-content: space-between;
            .type {
                width: calc((100% / 2) - 10px);
                height: 25px;
                line-height: 25px;
                border-radius: 5px;
                font-size: ${ props => props.theme.font.descr };
                text-align: center;
                color: #ffffff;
            }
        }
    }
`;
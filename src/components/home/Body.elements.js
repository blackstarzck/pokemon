import styled from "styled-components";

export const BodyStyles = styled.section`
    max-width: 1030px;
    margin: 0 auto;

    .section-head {
        margin-top: 110px;
    }

    .loading {
        width: 100px;

        .square {
            width: 20px;
            height: 20px;
            border-radius: 5px;
            background-color: ${ props => props.theme.colors.primary };
            animation: loadingG 1.5s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
        }
    }

    .section-body {
        .cards-wrapper {
            margin-top: 36px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 26px;

            @media screen and (max-width: 1030px) {
                grid-template-columns: repeat(3, 1fr);
                padding: 0 15px;
            }
            @media screen and (max-width: 780px) {
                grid-template-columns: repeat(2, 1fr);
                gap: 18px;
            }
            @media screen and (max-width: 410px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }
    }

    @keyframes loadingG {
        0% { transform: translate(0, 0) rotate(0deg); }
        50% { transform: translate(70px, 0) rotate(360deg); }
        100% { transform: translate(0, 0) rotate(0deg); }
    }
`;
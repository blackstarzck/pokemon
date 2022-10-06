import styled from "styled-components";

export const BodyStyles = styled.section`
    max-width: 1030px;
    margin: 0 auto;

    .section-head {
        margin-top: 110px;
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
`;
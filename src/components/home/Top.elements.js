import styled from "styled-components";

export const TopStyles = styled.div`
    text-align: center;
    h1.title {
        font-size: ${ props => props.theme.font.mainTitle };
        font-weight: 900;
        letter-spacing: -.6px;
        line-height: 56px;
    }
    
    .search-box {
        width: 326px;
        display: flex;
        margin: 36px auto 15px;

        input[type=text] {
            border: 1px solid ${props => props.theme.colors.gray1};
            border-right: 0;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            font-size: 1rem;
            font-weight: 300;
            text-indent: 20px;
            width: 100%;
            height: 30px;
        }
        input[type=text]::placeholder {
            font-family: "Inter";
            color: ${ props => props.theme.colors.gray2}
        }
        button {
            width: 80px;
            height: 30px;
            line-height: 30px;
            background-color: ${ props => props.theme.colors.gray1 };
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            color: ${ props => props.theme.colors.gray4 };
            display: flex; justify-content: center; align-items: center;

            svg { width: 18px; height: 18px }
        }
    }
`;
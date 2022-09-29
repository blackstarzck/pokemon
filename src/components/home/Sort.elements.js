import styled from "styled-components";

export const SortStyles = styled.div`
    display: flex;
    align-items: center;

    .select-box {
        width: 198px;
        position: relative;
        margin-left: 20px;

        .selected {
            display: flex;
            justify-content: space-between;
            align-items: center;

            height: 30px;
            padding: 0 15px;
            border: 1px solid ${ props => props.theme.colors.gray3 };
            border-radius: 5px;
            cursor: pointer;
        }
    }

    ul.option-wrapper {
        width: 100%;
        height: 122px;
        border: 1px solid ${ props => props.theme.colors.gray3 };
        position: absolute;
        top: 33px; left: 0;
        border-radius: 5px;
        overflow: hidden;
        background-color: #ffffff;
        transition: all .2s ease-in-out;
        z-index: 5;

        li.option {
            width: 100%;
            height: 30px;
            line-height: 30px;
            padding: 0 15px;
            cursor: pointer;

            &:hover { color: #ffffff; background-color: rgba(0,0,0,.5) }
        }
    }
`;
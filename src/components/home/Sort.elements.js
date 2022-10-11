import styled, { css } from "styled-components";

export const SortStyles = styled.div`
    display: flex;
    align-items: center;

    ${ props => console.log("props: ", props) }

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
            color: ${ props => props.isLoaded ? props.theme.colors.normal : props.theme.colors.gray2 };
            border: 1px solid ${ props => props.isLoaded ? props.theme.colors.gray3 : props.theme.colors.gray2};
            border-radius: 5px;
            cursor: pointer;

            svg {
                transition: all .2s ease;
                transform: ${props => props.isOpen ? "rotate(-180deg)" : "rotate(0deg)"}
            }
        }
    }

    ul.option-wrapper {
        width: 100%;
        visibility: ${ props => props.isOpen ? "visible" : "hidden"};
        height: ${ props => props.isOpen ? "122px" : 0};
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
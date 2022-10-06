import styled from "styled-components";

export const FilterStyles = styled.ul`
    ul.filter-wrapper {
        width: 326px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        li.filter-item {
            width: calc((100% / 3) - 8px);
            height: 25px;
            font-size: ${ props => props.theme.font.descr };
            line-height: 25px;
            border-radius: 5px;
            background-color: ${ props => props.theme.button.inactive };
            cursor: pointer;
        }

        li.filter-item:hover, li.filter-item.active {
            /* font-weight: 600; */
            color: #ffffff;
            background-color: ${ props => props.theme.button.active };
        }
    }
`;
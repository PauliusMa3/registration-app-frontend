import styled, { css } from "styled-components";

export const StyledTab = styled.div`
    padding: 2rem 3rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    flex: 1;
    cursor: pointer;
    ${({ activeTab }) =>
        activeTab &&
        css`
            background: ${(props) => props.theme.colors.colorSecondary300};
        `};
`;

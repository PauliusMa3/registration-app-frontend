import styled from "styled-components";

export const TabsContent = styled.div`
    background: ${(props) => props.theme.colors.colorSecondary300};
    padding: 10px;
    border-radius: 10px;
`;

export const TabTiles = styled.div`
    padding: 1rem;
`;

export const TabTilesContainer = styled.div`
    display: flex;
    padding: 0 20px;
`;

export const AppContainer = styled.div`
    min-height: 100vh;
    margin-top: 100px;
    width: 100%;
    padding: 10px;
`;

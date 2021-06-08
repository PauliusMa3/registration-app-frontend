import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PanelWrapper = styled.div`
    background: ${(props) => props.theme.colors.colorSecondary300};
    padding: 30px;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    min-height: 60vh;
    animation: ${fadeIn} linear 300ms;
    display: flex;
    align-items: center;
    justify-content: center;
`;

import styled from "styled-components";

export const CalendarContainer = styled.div`
    background: ${(props) => props.theme.colors.colorSecondary100};
    padding: 30px;
    border-radius: 5px;
    overflow: auto;

    .calendar {
        background: ${(props) => props.theme.colors.colorSecondary100};
    }
`;

export const CalendarContainerWrapper = styled.div`
    display: grid;
    gap: 2rem;
    width: 100%;
    overflow: hidden;
`;

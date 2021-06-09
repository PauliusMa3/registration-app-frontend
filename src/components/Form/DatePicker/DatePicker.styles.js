import styled, { css } from "styled-components";

export const DatePickerWrapper = styled.div`
    .date-picker {
        width: 100%;
        display: flex;
        .react-datepicker__input-container input {
            width: 50%;
            justify-content: start;
            border-radius: 20px;
            padding: 1.6rem 2rem;
            font-size: 1.2rem;
            line-height: 1.5rem;
            letter-spacing: 0.25px;
            border-radius: 10px;
            border: 1px solid ${(props) => props.theme.colors.colorSecondary200};
        }
    }
`;

export const Label = styled.label`
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: 0.25px;
    display: grid;
    gap: 1rem;
    text-transform: capitalize;
    max-width: 100%;

    text-align: start;
    ${({ error }) =>
        error &&
        css`
            color: ${(props) => props.theme.colors.colorError};
        `};

    .react-datepicker {
        font-size: 1em;
    }
    .react-datepicker__header {
        padding-top: 0.8em;
    }
    .react-datepicker__month {
        margin: 0.4em 1em;
    }
    .react-datepicker__day-name,
    .react-datepicker__day {
        width: 1.9em;
        line-height: 1.9em;
        margin: 0.166em;
    }
    .react-datepicker__current-month {
        font-size: 1em;
    }

    .react-datepicker__triangle {
        display: none;
    }

    .react-datepicker__time-list-item--disabled {
        display: none;
    }
`;

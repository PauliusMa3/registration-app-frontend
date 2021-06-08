import styled, { css } from "styled-components";

export const DatePickerWrapper = styled.div`
    .date-picker {
        width: 100%;
        display: flex;
        .react-datepicker__input-container input {
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
`;

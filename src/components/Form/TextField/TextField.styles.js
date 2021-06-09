import styled, { css } from "styled-components";

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

export const InputField = styled.input`
    border: 1px solid ${(props) => props.theme.colors.colorSecondary200};
    border-radius: 3px;
    padding: 1.6rem 2rem;
    color: ${(props) => props.theme.colors.colorSecondary800};
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: 0.25px;
    border-radius: 10px;

    &:focus {
        outline: none;
        border: 1px solid ${(props) => props.theme.colors.colorPrimary400};
    }
    ${({ error }) =>
        error &&
        css`
            border: 1px solid ${(props) => props.theme.colors.colorError};
        `};
`;

export const StyledTextField = styled.div`
    display: grid;
    gap: 1rem;
    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
`;

export const FormError = styled.div`
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.colorError};
`;

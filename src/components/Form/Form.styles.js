import { Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
    max-width: 70rem;
    padding: 20px;
    border-radius: 10px;
    background: ${(props) => props.theme.colors.colorSecondary100};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    width: min(100%, 70rem);

    h1 {
        padding-bottom: 3rem;
    }

    fieldset {
        margin: 0;
        border: 0;
        display: grid;
        gap: 2rem;

        &::disabled {
            opacity: 0.6;
        }
    }
`;

export const Button = styled.button`
    background: ${(props) => props.theme.colors.colorPrimary400};
    padding: 1rem 1.5rem;
    color: ${(props) => props.theme.colors.colorSecondary100};
    letter-spacing: 0.25px;
    border-radius: 10px;
    max-width: max-content;
    cursor: pointer;
    opacity: 1;
    transition: opacity 400ms;

    &:hover {
        opacity: 0.8;
        transition: opacity 400ms;
    }

    &:disabled {
        opacity: 0.6;
    }
`;

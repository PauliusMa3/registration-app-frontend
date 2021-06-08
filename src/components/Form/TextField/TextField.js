import React from "react";
import { useField } from "formik";
import * as S from "./TextField.styles";

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <S.StyledTextField>
            <S.Label
                htmlFor={props.id || props.name}
                error={meta.touched && meta.error}
            >
                {label}
                <S.InputField
                    {...field}
                    {...props}
                    error={meta.touched && meta.error}
                />
            </S.Label>
            {meta.touched && meta.error ? (
                <S.FormError>{meta.error}</S.FormError>
            ) : null}
        </S.StyledTextField>
    );
};

export default TextField;

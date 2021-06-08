import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "./TextField/TextField";
import DatePickerField from "./DatePicker/DatePicker";
import * as S from "./Form.styles";
import moment from "moment";
import Alert from "../Alert/Alert";
import axios from "axios";

const initialValues = {
    firstName: "",
    lastName: "",
    date: ""
};

const FormValidationSchema = Yup.object().shape({
    firstName: Yup.string().trim().required("Name cannot be empty"),
    lastName: Yup.string().trim().required("Last Name cannot be empty"),
    reservationDate: Yup.string().trim().required("Date cannot be empty")
});

const ReservationForm = () => {
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);
    const registerAppointment = async (requestData) => {
        setStatus("pending");

        try {
            await axios.post(
                `${process.env.REACT_APP_API_URL}/reservations`,
                requestData
            );

            setStatus("resolved");
        } catch (e) {
            setStatus("rejected");
            setError(e.response.data.message);
        }
    };

    const isLoading = status === "pending";

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={FormValidationSchema}
            onSubmit={async (values, { resetForm }) => {
                const appointmentData = {
                    ...values,
                    reservationDate: moment(values.reservationDate).format(
                        "YYYY-MM-DD HH:mm"
                    )
                };

                await registerAppointment(appointmentData);
                resetForm();
            }}
        >
            {({ isValid, isSubmitting }) => (
                <S.StyledForm>
                    <h1>Doctor Appointment Form</h1>
                    {status === "resolved" ? (
                        <Alert severity='success'>
                            You successfully made an appointment
                        </Alert>
                    ) : null}
                    {status === "rejected" && error ? (
                        <Alert severity='error'>{error}</Alert>
                    ) : null}
                    <fieldset disabled={isLoading || isSubmitting}>
                        <TextField
                            name='firstName'
                            label={"First Name"}
                            type='text'
                        />
                        <TextField
                            name='lastName'
                            label={"Last Name"}
                            type='text'
                        />
                        <DatePickerField
                            name='reservationDate'
                            label={"Appointment Date"}
                        />
                        <S.Button disabled={!isValid} type='submit'>
                            Book Appointment
                        </S.Button>
                    </fieldset>
                </S.StyledForm>
            )}
        </Formik>
    );
};

export default ReservationForm;

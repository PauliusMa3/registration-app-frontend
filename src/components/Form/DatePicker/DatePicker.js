import React from "react";
import { useField, useFormikContext } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import * as S from "./DatePicker.styles";
import { FormError } from "../TextField/TextField.styles";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import moment from 'moment';


const DatePickerField = ({ ...props }) => {
    const [field, meta] = useField(props);
    const { setFieldValue } = useFormikContext();

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };
    return (
        <S.DatePickerWrapper>
            <S.Label htmlFor={field.name} error={meta.touched && meta.error}>
                {"Appointment Date"}
                <DatePicker
                    {...field}
                    {...props}
                    selected={field.value}
                    onChange={(val) => {
                        setFieldValue(field.name, val);
                    }}
                    showTimeSelect
                    timeFormat='HH:mm'
                    timeIntervals={30}
                    dateFormat='yyyy-MM-dd HH:mm'
                    wrapperClassName='date-picker'
                    excludeOutOfBoundsTimes
                    minDate={moment().toDate()}
                    minTime={setHours(setMinutes(new Date(), 0), 8)}
                    maxTime={setHours(setMinutes(new Date(), 30), 17)}
                    filterTime={filterPassedTime}
                    formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
                    autoComplete='off'
                    placeholderText='Select Appointment date'
                />

                {meta.touched && meta.error ? (
                    <FormError>{meta.error}</FormError>
                ) : null}
            </S.Label>

        </S.DatePickerWrapper>
    );
};

export default DatePickerField;

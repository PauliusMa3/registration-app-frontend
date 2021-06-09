import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ReactLoading from "react-loading";
import Alert from "../Alert/Alert";
import * as S from "./reservationCalendar.styles";
import axios from "axios";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
const localizer = momentLocalizer(moment);

const ReservationsCalendar = () => {
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        async function fetchReservations() {
            try {
                setStatus("pending");

                const reservations = await axios.get(
                    `${process.env.REACT_APP_API_URL}/reservations`
                );

                setReservations(prepareReservationsDates(reservations?.data));
                setStatus("resolved");
            } catch (e) {
                const errorMessage = e?.response?.data?.message ?? e.message;
                setError(errorMessage);
                setStatus("rejected");
            }
        }

        fetchReservations();
    }, []);

    const prepareReservationsDates = (reservations) => {
        if (!reservations) {
            return null;
        }
        return reservations.map((item) => ({
            ...item,
            start: moment.utc(item.reservationDate).toDate(),
            end: moment(item.reservationDate).add(30, "minutes").utc().toDate(),
            title: item.firstName + " " + item.lastName
        }));
    };

    const isLoading = status === "idle" || status === "pending";

    return (
        <S.CalendarContainerWrapper>
            {isLoading ? <ReactLoading className='calendar-loader' type='spin' height={"5%"} width={"5%"} /> : null}
            {status === "rejected" && error ? (
                <Alert severity='error'>{error}</Alert>
            ) : null}
            {!isLoading ? (
                <S.CalendarContainer>
                    <Calendar
                        localizer={localizer}
                        events={reservations}
                        startAccessor='start'
                        endAccessor='end'
                        style={{ height: 800 }}
                        step={30}
                        className='calendar'
                        minTime={setHours(setMinutes(new Date(), 0), 8)}
                        maxTime={setHours(setMinutes(new Date(), 30), 17)}
                    />
                </S.CalendarContainer>
            ) : null}
        </S.CalendarContainerWrapper>
    );
};

export default ReservationsCalendar;

import { ArrowLeft, ArrowRight } from "lucide-react";
import "../styles/CalenderView.css";
import {
  dates,
  days,
  currentSchedule,
  schedule,
  specialSlots,
} from "../data/CalenderData";

const CalenderView = () => {
  const chosenSlot = { day: 1, time: "09:00" };
  return (
    <>
      {/*  Calender */}
      <div className="calendar">
        <div className="cal-head">
          <span>October 2021</span>
          <div className="arrows">
            <ArrowLeft />
            <ArrowRight />
          </div>
        </div>
        <div className="days">
          {days.map((day, index) => (
            <div
              className={`day-col ${index === 1 ? "active" : ""}`}
              key={index}
            >
              <div className={`day-label ${index === 1 ? "active-day" : ""}`}>
                <div>{day}</div>
                <div className="date">{dates[index]}</div>
              </div>
              <div className="slots">
                {schedule[index]?.map((time) => {
                  const isSelected =
                    chosenSlot?.day === index && chosenSlot.time === time;
                  return (
                    <span
                      key={time}
                      className={`slot 
    ${isSelected ? "highlight-dark" : ""} 
    ${
      specialSlots[index]?.includes(time) && !isSelected ? "highlight-dull" : ""
    }`}
                    >
                      {time}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Appointments */}
      <div className="appts">
        {currentSchedule.map((appointment) => (
          <div
            className="appt-card"
            key={appointment.id}
            style={{ background: appointment.color, color: appointment.text }}
          >
            <div className="appt-head">
              <p>{appointment.title}</p>
              <p>{appointment.icon}</p>
            </div>
            <div className="appt-time">{appointment.time}</div>
            <div className="appt-dr">{appointment.doctor}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CalenderView;

import { upcomingSchedule } from "../data/upcomingSchedule";
import "../styles/UpcomingSchedule.css";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {upcomingSchedule.map(({ day, appointments }) => (
        <div className="day-section" key={day}>
          <p className="up-day-label">{day}</p>
          <div className="card-row">
            {appointments.map((appt, index) => (
              <SimpleAppointmentCard key={index} {...appt} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;

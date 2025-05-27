import "../styles/SimpleAppointmentCard.css";
const SimpleAppointmentCard = ({ title, icon, time }) => {
  return (
    <div className="appointment-card">
      <div className="appointment-title">
        <div className="title">{title}</div>
        {icon}
      </div>
      <div className="appointment-time">{time}</div>
    </div>
  );
};

export default SimpleAppointmentCard;

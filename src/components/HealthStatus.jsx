import "../styles/HealthStatus.css";
import { healthData } from "../data/healthData";
const HealthStatus = () => {
  return (
    <div className="health-cards">
      {healthData.map((health, index) => (
        <div className="health-card" key={index}>
          <div className="h-container">
            <div className="h-card-icon">{health.icon}</div>
            <div className="h-card-title">
              <h5>{health.title}</h5>
            </div>
          </div>
          <div className="card-content">
            <p>Date: {health.date}</p>
            <div className="progress-bar">
              <div
                className="fill"
                style={{
                  width: `${health.percent}%`,
                  backgroundColor: health.color,
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
      <div className="details">Details →</div>
    </div>
  );
};

export default HealthStatus;

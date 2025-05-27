import { activityData } from "../data/activityData";
import "../styles/ActivityPanel.css";

export default function ActivityPanel() {
  return (
    <div className="activity-card">
      <div className="activity-header">
        <h3>Activity</h3>
        <span>3 appointment on this week</span>
      </div>

      <div className="activity-graph">
        {activityData.map((dayData, index) => (
          <div className="day1" key={index}>
            <div className="day">
              {dayData.bars.map((group, i) => (
                <div className="bar-group" key={i}>
                  {group.map((bar, j) => (
                    <div
                      className={`bar ${bar.color}`}
                      key={j}
                      style={{ height: `${bar.height}px` }}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
            <div className="label">{dayData.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

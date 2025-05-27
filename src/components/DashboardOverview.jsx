import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatus from "./HealthStatus";
import "../styles/DashboardOverview.css";
import ActivityPanel from "./ActivityPanel";

const DashboardOverview = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-heading">
        <h2>Dashboard</h2>
        <h5>This Week &#9662;</h5>
      </div>

      <div className="overview-content">
        <AnatomySection />
        <HealthStatus />
      </div>
      <div className="activity">
        <ActivityPanel />
      </div>
    </div>
  );
};

export default DashboardOverview;

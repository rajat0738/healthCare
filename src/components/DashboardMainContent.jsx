import React from "react";
import CalenderView from "./CalenderView";
import "../styles/DashboardMainContent.css";
import UpcomingSchedule from "./UpcomingSchedule";
import DashboardOverview from "./DashboardOverview";

const DashboardMainContent = () => {
  return (
    <>
      <div className="dashboard-main">
        <div className="overview-container">
          <DashboardOverview />
        </div>
        <div className="schedule-container">
          <CalenderView />
          <UpcomingSchedule />
        </div>
      </div>
    </>
  );
};

export default DashboardMainContent;

import "./App.css";
import DashboardMainContent from "./components/DashboardMainContent";
import Header from "./components/Header";
import Sidebar from "./components/sidebar";

const App = () => {
  return (
    <>
      <div className="main-content">
        <Header />
        <div className="all-content">
          <div className="main-sidebar">
            <Sidebar />
          </div>
          <DashboardMainContent />
        </div>
      </div>
    </>
  );
};

export default App;

import "../styles/Sidebar.css";
import { menuItems } from "../data/sidebarData";
import { Settings } from "lucide-react";
const Sidebar = () => {
  return (
    <>
      <input type="checkbox" id="sidebar-toggle" className="sidebar-toggle" />
      <label htmlFor="sidebar-toggle" className="hamburger">
        ☰
      </label>
      <div className="sidebar">
        <div className="sidebar-nav">
          {menuItems?.map((item) => (
            <div className="list" key={item.title}>
              <p>{item.title}</p>
              <ul className="sidebar-list">
                {item?.items?.map(({ label, icon: Icon }) => (
                  <li key={label}>
                    <button
                      className={`menu-btn ${
                        label === "Dashboard" ? "active" : ""
                      }`}
                    >
                      <Icon size={20} />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="settings">
          <button className="menu-btn">
            <Settings />
            Settings
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

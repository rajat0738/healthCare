import "../styles/Sidebar.css";
import { menuItems } from "../data/sidebarData";
const Sidebar = () => {
  return (
    <div className="sidebar">
      {menuItems.map((item) => (
        <div className="list" key={item.title}>
          <p>{item.title}</p>
          <ul>
            {item.items.map(({ label, icon: Icon }) => (
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
  );
};

export default Sidebar;

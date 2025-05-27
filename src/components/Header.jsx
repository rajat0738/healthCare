import { Bell, Icon, Image, Plus, Search } from "lucide-react";
import "../styles/Header.css";
const Header = () => {
  return (
    <header className="head">
      {/* Logo and Search Bar */}
      <div className="left">
        <div className="">
          <span className="light-text">Health</span>
          <span className="dark-text">care.</span>
        </div>
        <div className="search-container">
          <Search className="head-icon search-icon" />
          <input type="text" placeholder="Search" />
          <Bell className="head-icon bell-icon" />
        </div>
      </div>
      <div className="right">
        <span>👦🏻</span>
        <Plus className="plus-icon" />
      </div>
    </header>
  );
};

export default Header;

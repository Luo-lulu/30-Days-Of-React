import React from "react";
import { Link } from "react-router-dom";
import { Menu, Col } from "antd";
import { AiOutlineHome } from "react-icons/ai";
const Navbar = () => (
  <Menu className="nav" mode="horizontal">
    <Menu.Item icon={<AiOutlineHome />} className="nav_item">
      <Link to="/">Hot games</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/lol" className="nav_item">
        Lol
      </Link>
    </Menu.Item>
    {/* <div>
      <Link to="/">Hot games</Link>
    </div>
    <div>
      <Link to="/lol">Lol</Link>
    </div> */}
  </Menu>
);

export default Navbar;

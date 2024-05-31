import React, { useState } from "react";
import "./Sidebar.scss";
import menu from "../../data/sidebar";
import SidebarItem from "./SidebarItem";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      {/* <div className="layout"> */}
      <div className="sidebar" style={{ width: isOpen ? "320px" : "60px" , top:"70px", backgroundColor:"rgb(206, 196, 196)"}}>
        {menu.map((item, index) => {
          return <SidebarItem key={index} item={item} isOpen={isOpen} />;
        })}
      </div>
    </>
  );
};

export default Sidebar;

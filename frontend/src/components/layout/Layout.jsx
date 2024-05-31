import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        {/* sidebar */}
        <div>
          <Sidebar/>
        </div>

        {/* main section  */}
        <div style={{ minHeight: "90vh", backgroundColor:"white", width:"80%", float:'right'}} className="">
          <div className="">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

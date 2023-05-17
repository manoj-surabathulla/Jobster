import React from "react";
import Wrapper from "../../assets/wrappers/SharedLayout";
import SmallSidebar from "../../components/SmallSidebar";
import BigSideNavbar from "../../components/BigSideNavbar";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSideNavbar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;

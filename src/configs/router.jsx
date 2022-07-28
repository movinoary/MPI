import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Page from "../pages/index";
import * as cssModule from "../sass/index";
import * as Components from "../components/index";

const RouterDashboard = () => {
  return (
    <section className={cssModule.Page.dashboardPage}>
      <Components.SideNav />
      <div className={cssModule.Page.dashboardContent}>
        <Components.Header />
        <div className={cssModule.Page.dashboardRouter}>
          <Routes>
            <Route path="/" element={<Page.Dashboard />} />
            <Route path="transaction" element={<Page.Transaction />} />
            <Route path="*" element={<Page.BlankPage />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default RouterDashboard;

import React from "react";
import * as Assets from "../assets/index";
import * as Components from "../components/index";
import * as cssModule from "../sass/index";

const Dashboard = () => {
  return (
    <section className={cssModule.Page.dashboardRow}>
      <div className={cssModule.Page.dashboardTop}>
        <Components.CreditPrice />
        <Components.CreditStatus />
        <Components.CreditCard />
      </div>
      <div className={cssModule.Page.dashboardCenter}>
        {Assets.DataStatistik.map(item => (
          <Components.SmallBar key={item.id} item={item} />
        ))}
      </div>
      <div className={cssModule.Page.dashboardBottom}>
        <Components.TransactionLatest />
        <Components.TransactionUpcoming />
      </div>
    </section>
  );
};

export default Dashboard;
